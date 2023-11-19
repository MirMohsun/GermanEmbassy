import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ROUTES } from "./routes";
import { MainView } from "../../views/mainView";
import { BuildingsView } from "../../views/buildingsView";
import { ArchitectsView } from "../../views/architectsView";
import { BuildingPreView } from "../../views/buildingPreView";
import { AboutUsView } from "../../views/aboutUsView";
import { LegalView } from "../../views/legalView";
import { ContactView } from "../../views/contactView";
import { BookView } from "../../views/bookView";
import { RouteView } from "../../views/routeView";
import { LanguagesView } from "../../views/languagesView";
import { ArchitectsPreView } from "../../views/architectsPreView";
import { CustomDrawerContent } from "./customDrawer";
import { OnBoardingView } from "../../views/onBoardingView";
import { MainStackNavigator } from "./stackNavigation";

const Drawer = createDrawerNavigator();

const navigationOptions = () => {
  const screenOptions = {
    headerShown: false,
    gestureEnabled: true,
    drawerPosition: "right",
    drawerStyle: {
      width: "85%",
    },
  };
  return screenOptions;
};

export const DrawerNavigatorComponent = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={navigationOptions}
    >
      <Drawer.Screen name={"StackNavigation"} component={MainStackNavigator} />
    </Drawer.Navigator>
  );
};
