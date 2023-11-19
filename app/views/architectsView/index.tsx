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
import {
  ParamListBase,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import { GermanSymbol } from "../../assets/svg/germanSymbol";
import { COLORS } from "../../config";
import { MenuButton } from "../../components/menuButton";
import { BackButton } from "../../components/backButton";
import { ROUTES } from "../../modules/navigation/routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useDispatch } from "react-redux";
import { getArchitects } from "../../modules/saga/architects/action";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppContext } from "../../services/config/configAppContext";

interface Props {}

export const ArchitectsView: FC<Props> = memo(({}: Props) => {
  const styles = useMemo(() => getStyle(), []);
  const navigation: StackNavigationProp<ParamListBase> = useNavigation();
  const drawerNavigation: DrawerNavigationProp<ParamListBase> = useNavigation();
  const dispatch = useDispatch();
  const { architects } = useAppSelector((state) => state.Architects);
  const isFocused = useIsFocused();

  useEffect(() => {
    dispatch(getArchitects());
  }, [isFocused]);

  const {
    LocalizationContext: { translation },
  } = useAppContext();

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
        </View>
        <Text style={styles.welcome}>{translation("architects")}</Text>
        <FlatList
          data={architects}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ROUTES.ArchitectsPreView, { item })
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
                  source={{ uri: item.gallery[0]?.src }}
                  style={styles.img}
                />
                <Text numberOfLines={2} style={styles.menuTitle}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
});
