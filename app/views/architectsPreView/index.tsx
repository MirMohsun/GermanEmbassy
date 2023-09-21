import React, { FC, useMemo, memo, useRef, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, useWindowDimensions, ScrollView } from "react-native";
import { getStyle } from "./styles";
import { RouteProp } from "@react-navigation/native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { Paginator } from "../onBoardingView/paginator";
import { BackButton } from "../../components/backButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import { ArrowIcon } from "../../assets/svg/arrowIcon";

interface Props {
    route: RouteProp<any>
}

export const ArchitectsPreView: FC<Props> = memo(({ route }: Props) => {
    const { item } = route?.params || { item: {} };
    const { width } = useWindowDimensions();
    const { top } = useSafeAreaInsets();
    const flatList = useRef<FlatList>(null);
    const progress = useSharedValue(0);
    const [isMore, setIsMore] = useState(false);
    const styles = useMemo(() => getStyle(width, top, isMore), [width, top, isMore]);

    const onScrollEvent = useAnimatedScrollHandler({
        onScroll: (event) => {
            progress.value = event.contentOffset.x;
        }
    });

    return (
        <View style={styles.container}>
            <View style={styles.imagesWrapper}>
                <Animated.FlatList
                    horizontal
                    onScroll={onScrollEvent}
                    pagingEnabled
                    bounces={false}
                    ref={flatList}
                    showsHorizontalScrollIndicator={false}
                    data={item.images}
                    renderItem={(({ item }) => (
                        <Image source={{ uri: item.link }} style={styles.img} />
                    ))}
                />
                <View style={styles.backButtonWrapper}>
                    <BackButton />
                </View>
                <View style={styles.paginator}>
                    <Paginator {...{ data: item.images, progress, color: "#FFFFFF" }} />
                </View>
            </View>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }} contentContainerStyle={{ paddingBottom: isMore ? 140 : 30 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text numberOfLines={1} style={styles.label}>DATE:</Text>
                    <Text numberOfLines={1} style={styles.date}>{item.date}</Text>
                    <Text numberOfLines={1} style={styles.label}>INFO:</Text>
                    <Text numberOfLines={isMore ? 9999 : 20} style={styles.infoText}>{item.info}</Text>
                    <LinearGradient start={{ x: 1, y: 0.1 }} end={{ x: 1, y: 0.4 }} colors={["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 1)"]} style={styles.gradient}>
                        <TouchableOpacity onPress={() => setIsMore(!isMore)} style={styles.arrowButton}>
                            <ArrowIcon color="#000000" />
                        </TouchableOpacity>
                    </LinearGradient>
                </ScrollView>
            </View>
        </View>
    );
});
