import React, { FC, useMemo, memo } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { getStyle } from "./styles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { GermanSymbol } from "../../assets/svg/germanSymbol";
import { COLORS } from "../../config";
import { MenuButton } from "../../components/menuButton";
import { BackButton } from "../../components/backButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { legalData } from "./legalData";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useAppContext } from "../../services/config/configAppContext";

interface Props {}

export const LegalView: FC<Props> = memo(({}: Props) => {
  const styles = useMemo(() => getStyle(), []);
  const navigation: StackNavigationProp<ParamListBase> = useNavigation();
  const drawerNavigation: DrawerNavigationProp<ParamListBase> = useNavigation();
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
        <Text style={styles.welcome}>{translation("legal")}</Text>
        <ScrollView>
          {legalData.map(({ title, info }, index) => (
            <View key={index}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.info}>{info}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
});
