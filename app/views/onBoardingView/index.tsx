import React, { FC, useMemo, memo, useRef } from "react";
import { View, Text, FlatList, useWindowDimensions, ImageBackground } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { onBoardingData } from "./onBoardingData";
import { MainButton } from "../../components/mainButton";
import { Paginator } from "./paginator";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { StackActions, useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../modules/navigation/routes";
import { getStyle } from "./styles";

interface Props {}

export const OnBoardingView: FC<Props> = memo(({ }: Props) => {
    const styles = useMemo(() => getStyle(), []);
    const navigation = useNavigation();
    const { _setIsSkipOnboarding } = useAppDispatch();
    const { bottom } = useSafeAreaInsets();
    const { width, height } = useWindowDimensions();
    const flatList = useRef<FlatList>(null);
    const progress = useSharedValue(0);

    const onSkip = () => {
        _setIsSkipOnboarding(true);
        navigation.dispatch(StackActions.replace(ROUTES.MainView));
    };

    const onScrollEvent = useAnimatedScrollHandler({
        onScroll: (event) => {
            progress.value = event.contentOffset.x;
        }
    });

    return (
        <View style={styles.container}>
            <Animated.FlatList
                horizontal
                onScroll={onScrollEvent}
                pagingEnabled
                bounces={false}
                ref={flatList}
                showsHorizontalScrollIndicator={false}
                data={onBoardingData}
                renderItem={(({ item }) => (
                    <ImageBackground source={item.img} style={{ width, height }}>
                        <View style={styles.textWrapper}>
                            <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                            <Text style={styles.info}>{item.info}</Text>
                        </View>
                    </ImageBackground>
                ))}
            />
            <View style={styles.buttonWrapper}>
                <MainButton title="Skip" onPress={onSkip} />
                <View style={{ paddingTop: 30, paddingBottom: bottom || 30 }}>
                    <Paginator {...{ data: onBoardingData, progress }} />
                </View>
            </View>
        </View>
    );
});