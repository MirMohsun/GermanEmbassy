import React, { FC, useMemo, memo, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { getStyle } from "./styles";
import { RouteProp, useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Paginator } from "../onBoardingView/paginator";
import { BackButton } from "../../components/backButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import { ArrowIcon } from "../../assets/svg/arrowIcon";
import HTML from "react-native-render-html";
import { useAppContext } from "../../services/config/configAppContext";
import FastImage from "react-native-fast-image";
import { ROUTES } from "../../modules/navigation/routes";

interface Props {
  route: RouteProp<any>;
}

export const BuildingPreView: FC<Props> = memo(({ route }: Props) => {
  const { item } = route?.params || { item: {} };
  const { width } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
  const flatList = useRef<FlatList>(null);
  const progress = useSharedValue(0);
  const [isMore, setIsMore] = useState(false);
  const navigation = useNavigation();

  const styles = useMemo(
    () => getStyle(width, top, isMore),
    [width, top, isMore]
  );

  const {
    LocalizationContext: { translation },
  } = useAppContext();

  const tagsStyles = {
    p: {
      color: "black",
    },
    h4: {
      color: "black",
    },
  };

  const onScrollEvent = useAnimatedScrollHandler({
    onScroll: (event) => {
      progress.value = event.contentOffset.x;
    },
  });

  const imgGallery = item.gallery?.map(
    (item: { img_url: any }) => item.img_url
  );

  return (
    <View style={styles.container}>
      <View style={styles.imagesWrapper}>
        {item.gallery ? (
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
        <View style={styles.backButtonWrapper}>
          <BackButton />
        </View>
        <View style={styles.paginator}>
          {item.gallery ? (
            <Paginator {...{ data: imgGallery, progress, color: "#FFFFFF" }} />
          ) : null}
        </View>
      </View>
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: isMore ? 140 : 30 }}
        >
          <Text style={styles.title}>{item?.name}</Text>
          <View style={styles.divider} />
          <View style={styles.architectWrapper}>
            <FastImage
              style={styles.cover}
              source={{
                uri: item?.architect?.gallery[0]?.src,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View style={styles.architectNameWrapper}>
              <Text numberOfLines={1} style={styles.label}>
                {translation("architects").toUpperCase()}:
              </Text>
              <Text
                numberOfLines={4}
                style={styles.info}
                onPress={() =>
                  navigation.navigate(ROUTES.ArchitectsPreView, {
                    item: item?.architect,
                  })
                }
              >
                {item?.architect?.name}
              </Text>
            </View>
          </View>
          <View style={styles.divider} />
          <Text numberOfLines={1} style={styles.label}>
            {translation("info").toUpperCase()}:
          </Text>
          <HTML tagsStyles={tagsStyles} source={{ html: item.info }} />
          <LinearGradient
            start={{ x: 1, y: 0.1 }}
            end={{ x: 1, y: 0.4 }}
            colors={["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 1)"]}
            style={styles.gradient}
          >
            <TouchableOpacity
              onPress={() => setIsMore(!isMore)}
              style={styles.arrowButton}
            >
              <ArrowIcon color="#000000" />
            </TouchableOpacity>
          </LinearGradient>
        </ScrollView>
      </View>
    </View>
  );
});
