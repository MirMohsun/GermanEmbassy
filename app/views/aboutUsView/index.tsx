import React, { FC, useMemo, memo, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { getStyle } from "./styles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { GermanSymbol } from "../../assets/svg/germanSymbol";
import { COLORS } from "../../config";
import { MenuButton } from "../../components/menuButton";
import { BackButton } from "../../components/backButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useDispatch } from "react-redux";
import { getAboutInfo } from "../../modules/saga/contactsInfo/action";
import { useAppSelector } from "../../hooks/useAppSelector";
import HTML from "react-native-render-html";
import { useAppContext } from "../../services/config/configAppContext";

interface Props {}

export const AboutUsView: FC<Props> = memo(({}: Props) => {
  const styles = useMemo(() => getStyle(), []);
  const navigation: StackNavigationProp<ParamListBase> = useNavigation();
  const drawerNavigation: DrawerNavigationProp<ParamListBase> = useNavigation();
  const dispatch = useDispatch();
  const { aboutInfo } = useAppSelector((state) => state.ContactsInfo);

  const {
    LocalizationContext: { translation },
  } = useAppContext();

  useEffect(() => {
    dispatch(getAboutInfo());
  }, []);

  const tagsStyles = {
    p: {
      color: "black",
    },
    h4: {
      color: "black",
    },
  };
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
        <Text style={styles.welcome}>{translation("geb")}</Text>
        <ScrollView>
          <HTML tagsStyles={tagsStyles} source={{ html: aboutInfo.content }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
});
