import React, { FC, useMemo, memo, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { getStyle } from "./styles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { GermanSymbol } from "../../assets/svg/germanSymbol";
import { COLORS } from "../../config";
import { MenuButton } from "../../components/menuButton";
import { BackButton } from "../../components/backButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainButton } from "../../components/mainButton";
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface Props {}

export const LanguagesView: FC<Props> = memo(({}: Props) => {
  const styles = useMemo(() => getStyle(), []);
  const [selectedLang, setSelectedLang] = useState("English");
  const navigation: StackNavigationProp<ParamListBase> = useNavigation();
  const drawerNavigation: DrawerNavigationProp<ParamListBase> = useNavigation();

  const languages = ["English", "Russian", "Germany", "Azerbaijan"];

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
        <Text style={styles.welcome}>Language settings</Text>
        {languages.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.menuButton}
            onPress={() => setSelectedLang(item)}
          >
            <View style={styles.circeOut}>
              {selectedLang === item ? (
                <View style={styles.circeInner} />
              ) : null}
            </View>
            <Text numberOfLines={1} style={styles.menuTitle}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <MainButton
        title="Save and restart"
        containerStyle={styles.saveButton}
        labelStyle={{ color: "#FFFFFF" }}
      />
    </SafeAreaView>
  );
});
