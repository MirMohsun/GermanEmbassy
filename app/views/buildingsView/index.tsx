import React, { FC, useMemo, memo, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { getStyle } from "./styles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { GermanSymbol } from "../../assets/svg/germanSymbol";
import { COLORS } from "../../config";
import { MenuButton } from "../../components/menuButton";
import { BackButton } from "../../components/backButton";
import { faker } from "@faker-js/faker";
import { ROUTES } from "../../modules/navigation/routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useDispatch } from "react-redux";
import { getBuildings } from "../../modules/saga/buildings/action";
import { useAppSelector } from "../../hooks/useAppSelector";

interface Props {}

export const BuildingsView: FC<Props> = memo(({}: Props) => {
  const styles = useMemo(() => getStyle(), []);
  const navigation: StackNavigationProp<ParamListBase> = useNavigation();
  const drawerNavigation: DrawerNavigationProp<ParamListBase> = useNavigation();
  const dispatch = useDispatch();
  const { buildings } = useAppSelector((state) => state.Buildings);

  useEffect(() => {
    dispatch(getBuildings());
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grayFour }}>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <View style={{ ...styles.floatMenuWrapper, left: 0 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <View style={{ ...styles.floatMenuWrapper, right: 0 }}>
            <MenuButton onPress={() => drawerNavigation.openDrawer()} />
          </View>
          <GermanSymbol width={36} height={70} />
          <Text style={styles.logoText}>{"German Embassy \nBaku"}</Text>
        </View>
        <Text style={styles.welcome}>Buildings</Text>
        <FlatList
          data={buildings?.data}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ROUTES.BuildingPreView, { item })
              }
              activeOpacity={0.6}
              style={styles.menuButtonWrapper}
            >
              <View
                style={{
                  ...styles.menuButton,
                  paddingRight: index % 2 ? 0 : 6,
                  paddingLeft: index % 2 ? 6 : 0,
                }}
              >
                <Image
                  source={{ uri: item.main_img }}
                  style={{
                    width: "100%",
                    height: 184,
                    backgroundColor: "#EEEEEE",
                  }}
                />
                <Text numberOfLines={2} style={styles.menuTitle}>
                  {item?.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
});
