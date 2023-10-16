import React, { FC, useMemo, memo } from "react";
import { SafeAreaView, View } from "react-native";
import { getStyle } from "./styles";
import { COLORS } from "../../config";
import { RouteItem } from "../../components/routeItem";
import { StationItem } from "../../components/stationItem";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { MenuButton } from "../../components/menuButton";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BackButton } from "../../components/backButton";
import { useAppSelector } from "../../hooks/useAppSelector";
import { IRoutes } from "../../modules/redux/routes";
import { ROUTES } from "../../modules/navigation/routes";

interface Props {}

export const RouteView: FC<Props> = memo(({}: Props) => {
  const styles = useMemo(() => getStyle(), []);
  const navigation: StackNavigationProp<ParamListBase> = useNavigation();
  const drawerNavigation: DrawerNavigationProp<ParamListBase> = useNavigation();
  const { routes } = useAppSelector((state) => state.Routes);
  const { params } = useRoute();
  const title = params?.title;

  const dataExtractor = () => {
    for (const route of routes) {
      if (route.name === title) {
        return route;
      }
    }
    return null;
  };

  const data = dataExtractor();
  console.log("data :>> ", data.stations[0].long);
  console.log("data :>> ", data.stations[0].lat);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grayFour }}>
      <View
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 10,
        }}
      >
        <BackButton onPress={() => navigation.navigate(ROUTES.MainView)} />
      </View>
      <View
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 10,
        }}
      >
        <MenuButton onPress={() => drawerNavigation.openDrawer()} />
      </View>
      {data ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ width: "100%", height: "80%" }}
          initialRegion={{
            latitude: data?.stations[0].lat,
            longitude: data?.stations[0].long,
            latitudeDelta: 0,
            longitudeDelta: 0,
          }}
        >
          <Marker
            coordinate={{
              latitude: data?.stations[0].lat,
              longitude: data?.stations[0].long,
            }}
            title="Место"
            description="Описание места"
          />
        </MapView>
      ) : null}
      {/* <RouteItem
        isRed
        name={data[0].name}
        addressFrom={data[0].stations[0].name}
        addressTo={data[0].stations[data[0].stations.length - 1].name}
      /> */}
      <StationItem />
      <StationItem />
      <StationItem />
    </SafeAreaView>
  );
});
