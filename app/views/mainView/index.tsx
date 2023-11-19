import React, { FC, useMemo, memo, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { getStyle } from "./styles";
import {
  ParamListBase,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import { GermanSymbol } from "../../assets/svg/germanSymbol";
import { COLORS } from "../../config";
import { menuData } from "./menuData";
import { MenuButton } from "../../components/menuButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useDispatch } from "react-redux";
import { getRoutes } from "../../modules/saga/routes/action";
import { getBook } from "../../modules/saga/buildings/action";
import { useAppContext } from "../../services/config/configAppContext";

interface Props {}

export const MainView: FC<Props> = memo(({}: Props) => {
  const styles = useMemo(() => getStyle(), []);
  const navigation: StackNavigationProp<any> = useNavigation();
  const drawerNavigation: DrawerNavigationProp<ParamListBase> = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const {
    LocalizationContext: { translation },
  } = useAppContext();

  const onPressMenuItem = (goToScreen: string, title: string) => {
    navigation.navigate(goToScreen, {
      title: title == "routeA" ? "Route - A" : "Route - B",
    });
  };

  useEffect(() => {
    dispatch(getRoutes());
    dispatch(getBook());
  }, [isFocused]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grayFour }}>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <View style={styles.floatMenuWrapper}>
            <MenuButton onPress={() => drawerNavigation.openDrawer()} />
          </View>
          <GermanSymbol width={36} height={70} />
        </View>
        <Text style={styles.welcome}>{translation("welcome")}</Text>
        <Text style={styles.info}>{translation("seeUAgain")}</Text>
        <FlatList
          data={menuData}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View
              style={{
                ...styles.menuButtonWrapper,
                paddingRight: index % 2 ? 0 : 6,
                paddingLeft: index % 2 ? 6 : 0,
              }}
            >
              <TouchableOpacity
                onPress={() => onPressMenuItem(item.goTo, item.title)}
                style={styles.menuButton}
              >
                {item.icon}
                <Text
                  numberOfLines={1}
                  style={{
                    ...styles.menuTitle,
                    color:
                      item.title === "Route A"
                        ? "#3D39F0"
                        : item.title === "Route B"
                        ? "#F03939"
                        : "#000000",
                  }}
                >
                  {translation(item.title)}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
});
