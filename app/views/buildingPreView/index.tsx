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
import { RouteProp } from "@react-navigation/native";
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
import moment from "moment";

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
  const styles = useMemo(
    () => getStyle(width, top, isMore),
    [width, top, isMore]
  );

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
              console.log("item :>> ", item);
              return <Image source={{ uri: item }} style={styles.img} />;
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
          style={{ marginTop: 20 }}
          contentContainerStyle={{ paddingBottom: isMore ? 140 : 30 }}
        >
          <Text style={styles.title}>{item?.name}</Text>
          <View style={styles.divider} />
          <View style={styles.architectWrapper}>
            <Image
              source={{ uri: item?.architect?.gallery[0]?.src }}
              style={styles.cover}
            />
            <View style={styles.architectNameWrapper}>
              <Text numberOfLines={1} style={styles.label}>
                ARCHITECTS:
              </Text>
              <Text numberOfLines={4} style={styles.info}>
                {item?.architect?.name}
              </Text>
            </View>
          </View>
          <Text numberOfLines={1} style={styles.label}>
            LOCATION:
          </Text>
          <Text numberOfLines={3} style={styles.info}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={{ ...styles.label, marginTop: 24 }}>
            DATE:
          </Text>
          <Text numberOfLines={1} style={styles.date}>
            {moment(item.architect.birth_date).format("DD.MM.YYYY")} -{" "}
            {moment(item.architect.death_date).format("DD.MM.YYYY")}
          </Text>
          <View style={styles.divider} />
          <Text numberOfLines={1} style={styles.label}>
            INFO:
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
