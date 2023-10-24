import React, { FC, useMemo, useRef } from "react";
import { Image, Modal, Text, View, useWindowDimensions } from "react-native";
import { getStyle } from "./styles";
import { useDispatch } from "react-redux";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import PaginationDot from "react-native-insta-pagination-dots";
import { FONTS } from "../../config";
import moment from "moment";
import { CloseButton } from "../closeButton";

interface Props {
  modal: {
    isVisible: boolean;
    openModal: (item: any) => void;
    closeModal: () => void;
    additionalData: any | null;
  };
}

export const MapModal: FC<Props> = ({ modal }) => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
  const flatList = useRef<FlatList>(null);
  const progress = useSharedValue(0);
  const styles = useMemo(() => getStyle(width, top), [width, top]);

  const handleCloseModal = () => {
    modal.closeModal();
  };

  const onScrollEvent = useAnimatedScrollHandler({
    onScroll: (event) => {
      console.log("event", event);
      progress.value = event.contentOffset.x;
    },
  });

  const imgGallery = modal?.additionalData?.building?.gallery?.map(
    (item: { img_url: any }) => item.img_url
  );

  return (
    <>
      <Modal
        animationType="fade"
        transparent
        visible={modal.isVisible}
        onRequestClose={modal.closeModal}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              width: "90%",
              height: "60%",
              backgroundColor: "white",
              alignSelf: "center",
              borderRadius: 16,
            }}
          >
            <View style={styles.imagesWrapper}>
              <View style={styles.backButtonWrapper}>
                <CloseButton onPress={modal.closeModal} />
              </View>
              {modal?.additionalData?.building?.gallery !== null ? (
                <Animated.FlatList
                  horizontal
                  onScroll={onScrollEvent}
                  pagingEnabled
                  bounces={false}
                  ref={flatList}
                  showsHorizontalScrollIndicator={false}
                  data={imgGallery}
                  renderItem={({ item }) => {
                    return (
                      <Image
                        source={{ uri: item }}
                        style={styles.img}
                        resizeMode="cover"
                      />
                    );
                  }}
                />
              ) : null}
              <View style={styles.paginator}>
                {modal?.additionalData?.building?.gallery !== null ? (
                  <PaginationDot
                    activeDotColor={"#FFF"}
                    maxPage={imgGallery?.length}
                  />
                ) : null}
              </View>
            </View>
            <View style={{ width: "90%", alignSelf: "center" }}>
              <Text
                style={{
                  fontFamily: FONTS.sfpMedium,
                  fontSize: 18,
                  fontWeight: "700",
                  lineHeight: 21,
                  letterSpacing: 0.01,
                  textAlign: "left",
                }}
              >
                {modal?.additionalData?.building?.name}
              </Text>
              <View style={{ flexDirection: "row", marginVertical: 12 }}>
                <Text
                  style={{
                    fontFamily: FONTS.sfpRegular,
                    fontSize: 14,
                    fontWeight: "500",
                    lineHeight: 17,
                    letterSpacing: 0.04,
                    textAlign: "left",
                  }}
                >
                  ARCHITECT:
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.sfpRegular,
                    fontSize: 14,
                    fontWeight: "600",
                    lineHeight: 17,
                    letterSpacing: 0.04,
                    textAlign: "left",
                  }}
                >
                  {modal?.additionalData?.building?.architect?.name}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontFamily: FONTS.sfpRegular,
                    fontSize: 14,
                    fontWeight: "500",
                    lineHeight: 17,
                    letterSpacing: 0.04,
                    textAlign: "left",
                  }}
                >
                  DATE:
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.sfpRegular,
                    fontSize: 14,
                    fontWeight: "600",
                    lineHeight: 17,
                    letterSpacing: 0.04,
                    textAlign: "left",
                  }}
                >
                  {moment(
                    modal?.additionalData?.building?.architect?.birth_date
                  ).format("YYYY")}{" "}
                  -{" "}
                  {moment(
                    modal?.additionalData?.building?.architect?.death_date
                  ).format("YYYY")}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
