import React, { FC, useMemo, memo, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { getStyle } from "./styles";
import { COLORS } from "../../config";
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
import { ROUTES } from "../../modules/navigation/routes";
import MapViewDirections from "react-native-maps-directions";
import { useModal } from "../../services/hooks/useModal";
import { MapModal } from "../../components/whiteModal";
import { RouteItem } from "../../components/routeItem";

interface Props {}

export const RouteView: FC<Props> = memo(({}: Props) => {
  const styles = useMemo(() => getStyle(), []);
  const navigation: StackNavigationProp<ParamListBase> = useNavigation();
  const drawerNavigation: DrawerNavigationProp<ParamListBase> = useNavigation();
  const modal = useModal();
  const { routes } = useAppSelector((state) => state.Routes);
  const { params } = useRoute();
  const title = params?.title;
  const { width, height } = Dimensions.get("screen");
  const statusBarHeight = StatusBar.currentHeight;
  const google_Key = "AIzaSyA50vK_B6DpwnDzDpHrhlKJPJZFEemXOg0";

  const dataExtractor = () => {
    for (const route of routes) {
      if (route.name === title) {
        return route;
      }
    }
    return null;
  };
  const data = dataExtractor();

  const [coordinates] = useState([
    {
      latitude: data?.stations[0].lat,
      longitude: data?.stations[0].long,
    },
    {
      latitude: data?.stations[0].lat,
      longitude: data?.stations[0].long,
    },
  ]);

  console.log(
    "data?.stations[data.stations[0].length - 1]?.name",
    data?.stations[data.stations.length - 1]?.name
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.grayFour,
      }}
    >
      <StatusBar />
      <ScrollView>
        <View
          style={{
            position: "absolute",
            top: 20 + statusBarHeight,
            left: 20,
            zIndex: 10,
          }}
        >
          <BackButton onPress={() => navigation.navigate(ROUTES.MainView)} />
        </View>
        <View
          style={{
            position: "absolute",
            top: 20 + statusBarHeight,
            right: 20,
            zIndex: 10,
          }}
        >
          <MenuButton onPress={() => drawerNavigation.openDrawer()} />
        </View>
        {data?.stations[0] ? (
          <>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{
                width: width,
                height: height * 0.65,
              }}
              initialRegion={{
                latitude: data?.stations[0].lat,
                longitude: data?.stations[0].long,
                latitudeDelta: 0,
                longitudeDelta: 0,
              }}
            >
              <MapViewDirections
                origin={coordinates[0]}
                destination={coordinates[1]}
                apikey={google_Key} // insert your API Key here
                strokeWidth={4}
                strokeColor="red"
              />
              {data.stations.map(
                (item: {
                  lat: any;
                  long: any;
                  building: { name: string | undefined };
                }) => {
                  return (
                    <Marker
                      coordinate={{
                        latitude: item.lat,
                        longitude: item.long,
                      }}
                      onPress={() => modal.openModal(item)}
                      title={item.building.name}
                    />
                  );
                }
              )}
            </MapView>
            {data.name && data?.stations
              ? data.stations.map((item: any, index: number) => {
                  console.log("title", title);
                  return index === 0 ? (
                    <>
                      <RouteItem
                        isRed={title !== "Route - A" ? true : false}
                        name={data?.name}
                        addressFrom={data?.stations[0]?.name}
                        addressTo={
                          data?.stations[data.stations.length - 1]?.name
                        }
                        distance={data?.distance}
                        stationCount={data?.stations.length}
                        time={data?.time}
                      />
                      <StationItem data={item} />
                    </>
                  ) : (
                    <StationItem data={item} />
                  );
                })
              : null}
          </>
        ) : null}
      </ScrollView>
      <MapModal modal={modal} />
    </SafeAreaView>
  );
});
