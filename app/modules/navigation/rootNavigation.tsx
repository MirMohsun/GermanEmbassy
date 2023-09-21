import React, { FC } from "react";
import { StatusBar, View } from "react-native";
import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import { COLORS } from "../../config";
import { SplashView } from "../../views/splashView";
import { useAppSelector } from "../../hooks/useAppSelector";
import { MainStackNavigator } from "./stackNavigation";

const navigationRef = createNavigationContainerRef<any>();

export const RootNavigation: FC = () => {
    const { isSplashLoading } = useAppSelector(state => state.AppStateSlice);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar animated backgroundColor={COLORS.white} barStyle={"dark-content"} />
            <NavigationContainer ref={navigationRef}>
                {!isSplashLoading
                    ? <SplashView />
                    : <MainStackNavigator />}
            </NavigationContainer>
        </View>
    );
};
