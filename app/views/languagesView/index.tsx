import React, { FC, useMemo, memo } from "react";
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
import { useAppContext } from "../../services/config/configAppContext";
import { ILocalizationType } from "../../services/localization/translations";
import { useAppDispatch } from "../../hooks/useAppDispatch";

interface Props {}

export const LanguagesView: FC<Props> = memo(({}: Props) => {
  const styles = useMemo(() => getStyle(), []);
  const navigation: StackNavigationProp<ParamListBase> = useNavigation();
  const drawerNavigation: DrawerNavigationProp<ParamListBase> = useNavigation();
  const { _setLangLocale, _setIsSplashLoading } = useAppDispatch();

  const {
    LocalizationContext: { setLocale, translation, locale },
  } = useAppContext();

  const languages = [
    { title: "English", short: "en" },
    { title: "Russian", short: "ru" },
    { title: "Germany", short: "ge" },
    { title: "Azerbaijan", short: "az" },
  ];

  const handleSetLang = (item: ILocalizationType) => {
    setLocale(item);
    _setLangLocale(item);
    _setIsSplashLoading(true);
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
        <Text style={styles.welcome}>{translation("langSettings")}</Text>
        {languages.map((item) => (
          <TouchableOpacity
            key={item.short}
            style={styles.menuButton}
            onPress={() => handleSetLang(item.short)}
          >
            <View style={styles.circeOut}>
              {locale === item.short ? (
                <View style={styles.circeInner} />
              ) : null}
            </View>
            <Text numberOfLines={1} style={styles.menuTitle}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <MainButton
        onPress={() => _setIsSplashLoading(false)}
        title={translation("saveRestart")}
        containerStyle={styles.saveButton}
        labelStyle={{ color: "#FFFFFF" }}
      />
    </SafeAreaView>
  );
});
