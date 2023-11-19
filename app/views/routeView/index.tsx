import React, { FC, useMemo, memo, useState, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getStyle } from "./styles";
import { COLORS, FONTS } from "../../config";
import { StationItem } from "../../components/stationItem";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { MenuButton } from "../../components/menuButton";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  ParamListBase,
  useIsFocused,
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
import { Path3Icon } from "../../assets/svg/path3Icon";
import { PathTabIcon } from "../../assets/svg/pathTabIcon";
import RoundedLines from "./roundedPoliline";

interface Props {}

export const RouteView: FC<Props> = memo(({}: Props) => {
  const navigation: StackNavigationProp<ParamListBase> = useNavigation();
  const drawerNavigation: DrawerNavigationProp<ParamListBase> = useNavigation();
  const modal = useModal();
  const { routes } = useAppSelector((state) => state.Routes);
  const { params } = useRoute();
  const title = params?.title;
  const { width, height } = Dimensions.get("screen");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const google_Key = "AIzaSyA50vK_B6DpwnDzDpHrhlKJPJZFEemXOg0";
  const [coordinateArray, setCoordinatesArray] = useState([]);
  const [isMapActive, seIsMapActive] = useState<boolean>(true);
  const styles = useMemo(() => getStyle(isMapActive), [isMapActive]);

  const [coordinates, setCoordinates] = useState([
    {
      latitude: 0,
      longitude: 0,
    },
  ]);
  const isFocused = useIsFocused();

  const dataExtractor = () => {
    for (const route of routes) {
      if (route.name === title) {
        return route;
      }
    }
    return null;
  };
  const data = dataExtractor();

  function extractCoordinates(inputArray: any[]) {
    const resultArray = inputArray.map((item: { lat: any; long: any }) => {
      return {
        latitude: parseFloat(item.lat),
        longitude: parseFloat(item.long),
      };
    });
    return resultArray;
  }
  useEffect(() => {
    if (data?.stations && coordinates?.latitude !== 0) {
      let coordinatesArray = extractCoordinates(data.stations);
      setCoordinatesArray(coordinatesArray);
      setCoordinates([
        {
          latitude: parseFloat(data?.stations[0]?.lat),
          longitude: parseFloat(data?.stations[0]?.long),
        },
        {
          latitude: parseFloat(data?.stations[data.stations.length - 1]?.lat),
          longitude: parseFloat(data?.stations[data.stations.length - 1]?.long),
        },
      ]);
      setIsLoading(true);
    }
    if (!isFocused) {
      setIsLoading(false);
      seIsMapActive(true);
      setCoordinates([
        {
          latitude: 0,
          longitude: 0,
        },
      ]);
    }
  }, [data, isFocused]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.grayFour,
      }}
    >
      <StatusBar />
      <ScrollView>
        <View style={styles.headerContainer}>
          <BackButton onPress={() => navigation.navigate(ROUTES.MainView)} />
        </View>
        <View style={styles.headerTabContainer}>
          <TouchableOpacity
            onPress={() => seIsMapActive(true)}
            style={styles.leftButtonContainer}
          >
            <Path3Icon color={!isMapActive ? "black" : "white"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => seIsMapActive(false)}
            style={styles.rightButtonContainer}
          >
            <PathTabIcon color={isMapActive ? "black" : "white"} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerDrawerContainer}>
          <MenuButton onPress={() => drawerNavigation.openDrawer()} />
        </View>
        {isLoading ? (
          isMapActive ? (
            <>
              <MapView
                provider={PROVIDER_GOOGLE}
                style={{
                  width: width,
                  height: height,
                }}
                mapType="terrain"
                minZoomLevel={18}
                initialRegion={{
                  latitude: parseFloat(coordinates[0].latitude),
                  longitude: parseFloat(coordinates[0].longitude),
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1,
                }}
              >
                <Polyline
                  coordinates={coordinateArray}
                  strokeColor={title !== "Route - A" ? "#E3001B" : "#3D39F0"}
                  strokeWidth={4}
                />
                {data.stations.map(
                  (item: {
                    name: string;
                    lat: any;
                    long: any;
                    building: { name: string };
                  }) => {
                    return (
                      <Marker
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        coordinate={{
                          latitude: parseFloat(item.lat),
                          longitude: parseFloat(item.long),
                        }}
                        onPress={() => modal.openModal(item)}
                      >
                        <Path3Icon
                          color={title !== "Route - A" ? "#E3001B" : "#3D39F0"}
                        />
                        <View
                          style={{
                            borderColor:
                              title !== "Route - A" ? "#E3001B" : "#3D39F0",
                            borderWidth: 4,
                            backgroundColor: "white",
                            width: 100,
                            height: 32,
                            borderRadius: 16,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: FONTS.sfpBold,
                              fontSize: 14,
                              fontWeight: "700",
                              lineHeight: 17,
                              letterSpacing: 0.04,
                              textAlign: "left",
                              color: COLORS.black,
                            }}
                          >
                            {item.name}
                          </Text>
                        </View>
                      </Marker>
                    );
                  }
                )}
              </MapView>
            </>
          ) : (
            <View
              style={{
                marginTop: 80,
              }}
            >
              {data.stations.map((item: any, index: number) => {
                console.log("first", title !== "Route - A" ? true : false);
                return index === 0 ? (
                  <>
                    <RouteItem
                      isRed={title !== "Route - A" ? true : false}
                      name={data?.name}
                      addressFrom={data?.stations[0]?.name}
                      addressTo={data?.stations[data.stations.length - 1]?.name}
                      distance={data?.distance}
                      stationCount={data?.stations.length}
                      time={data?.time}
                    />
                    <StationItem
                      data={item}
                      color={title !== "Route - A" ? "#E3001B" : "#3D39F0"}
                    />
                  </>
                ) : (
                  <StationItem
                    data={item}
                    color={title !== "Route - A" ? "#E3001B" : "#3D39F0"}
                  />
                );
              })}
            </View>
          )
        ) : (
          <ActivityIndicator />
        )}
      </ScrollView>
      <MapModal modal={modal} />
    </SafeAreaView>
  );
});
