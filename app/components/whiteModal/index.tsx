import React, { FC, useMemo, useRef } from "react";
import {
  ActivityIndicator,
  Image,
  Modal,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { getStyle } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import PaginationDot from "react-native-insta-pagination-dots";
import moment from "moment";
import { CloseButton } from "../closeButton";
import { useAppContext } from "../../services/config/configAppContext";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../modules/navigation/routes";
import FastImage from "react-native-fast-image";

interface Props {
  modal: {
    isVisible: boolean;
    openModal: (item: any) => void;
    closeModal: () => void;
    additionalData: any | null;
  };
}

export const MapModal: FC<Props> = ({ modal }) => {
  const { width } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
  const flatList = useRef<FlatList>(null);
  const progress = useSharedValue(0);
  const styles = useMemo(() => getStyle(width, top), [width, top]);
  const navigation = useNavigation();

  const {
    LocalizationContext: { translation },
  } = useAppContext();

  const handleCloseModal = () => {
    modal.closeModal();
  };

  const onScrollEvent = useAnimatedScrollHandler({
    onScroll: (event) => {
      progress.value = event.contentOffset.x;
    },
  });

  const imgGallery = modal?.additionalData?.building?.gallery
    ?.map((item: { img_url: any }) => item.img_url)
    .splice(0, 3);

  const handleBuildingPress = () => {
    navigation.navigate(ROUTES.BuildingPreView, {
      item: modal?.additionalData?.building,
    });
    modal.closeModal();
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent
        visible={modal.isVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.overlay}>
          <View style={styles.container}>
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
                  ListEmptyComponent={<ActivityIndicator />}
                  showsHorizontalScrollIndicator={false}
                  data={imgGallery}
                  renderItem={({ item }) => {
                    return (
                      <FastImage
                        style={styles.img}
                        source={{
                          uri: item,
                          priority: FastImage.priority.normal,
                        }}
                      />
                    );
                  }}
                />
              ) : null}
              <View style={styles.paginator}>
                {modal?.additionalData?.building?.gallery !== null
                  ? imgGallery?.map(() => (
                      <View
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 8,
                          backgroundColor: "white",
                          marginHorizontal: 6,
                        }}
                      />
                    ))
                  : null}
              </View>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title} onPress={handleBuildingPress}>
                {modal?.additionalData?.building?.name}
              </Text>
              <View style={styles.rowContainer}>
                <Text style={styles.rowLeft}>
                  {translation("architect").toUpperCase()}:
                </Text>
                <Text style={styles.rowRight}>
                  {modal?.additionalData?.building?.architect?.name}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
