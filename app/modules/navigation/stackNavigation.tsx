import React, { FC } from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { ROUTES } from "./routes";
import { MainView } from "../../views/mainView";
import { OnBoardingView } from "../../views/onBoardingView";
import { BuildingsView } from "../../views/buildingsView";
import { BuildingPreView } from "../../views/buildingPreView";
import { ArchitectsView } from "../../views/architectsView";
import { ArchitectsPreView } from "../../views/architectsPreView";
import { AboutUsView } from "../../views/aboutUsView";
import { LanguagesView } from "../../views/languagesView";
import { LegalView } from "../../views/legalView";
import { ContactView } from "../../views/contactView";
import { BookView } from "../../views/bookView";
import { RouteView } from "../../views/routeView";

const Stack = createStackNavigator();

const navigationOptions = () => {
    const screenOptions = {
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.ScaleFromCenterAndroid
    };
    return screenOptions;
};

export const MainStackNavigator: FC = () => {

    return (
        <Stack.Navigator screenOptions={navigationOptions}>
            <Stack.Screen name={ROUTES.OnBoardingView} component={OnBoardingView} />
            <Stack.Screen name={ROUTES.MainView} component={MainView} />
            <Stack.Screen name={ROUTES.BuildingsView} component={BuildingsView} />
            <Stack.Screen name={ROUTES.ArchitectsView} component={ArchitectsView} />
            <Stack.Screen name={ROUTES.BuildingPreView} component={BuildingPreView} />
            <Stack.Screen name={ROUTES.AboutUsView} component={AboutUsView} />
            <Stack.Screen name={ROUTES.LegalView} component={LegalView} />
            <Stack.Screen name={ROUTES.ContactView} component={ContactView} />
            <Stack.Screen name={ROUTES.BookView} component={BookView} />
            <Stack.Screen name={ROUTES.RouteView} component={RouteView} />
            <Stack.Screen name={ROUTES.LanguagesView} component={LanguagesView} />
            <Stack.Screen name={ROUTES.ArchitectsPreView} component={ArchitectsPreView} />
        </Stack.Navigator>
    );
};
