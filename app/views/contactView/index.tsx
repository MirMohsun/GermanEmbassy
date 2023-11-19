import React, { FC, useMemo, memo, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
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
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useDispatch } from "react-redux";
import {
  getAboutInfo,
  getContactsInfo,
} from "../../modules/saga/contactsInfo/action";
import { MailIcon } from "../../assets/svg/mailIcon";
import { PhoneIcon } from "../../assets/svg/phoneIcon";
import { WebIcon } from "../../assets/svg/webIcon";
import { LocationIcon } from "../../assets/svg/locationIcon";
import { useAppSelector } from "../../hooks/useAppSelector";
import HTML from "react-native-render-html";
import { useAppContext } from "../../services/config/configAppContext";

interface Props {}

export const ContactView: FC<Props> = memo(({}: Props) => {
  const styles = useMemo(() => getStyle(), []);
  const navigation: StackNavigationProp<ParamListBase> = useNavigation();
  const drawerNavigation: DrawerNavigationProp<ParamListBase> = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const { contactsInfo } = useAppSelector((state) => state.ContactsInfo);

  const {
    LocalizationContext: { translation },
  } = useAppContext();

  useEffect(() => {
    dispatch(getContactsInfo());
    dispatch(getAboutInfo());
  }, [isFocused]);

  const legalData = [
    {
      icon: <MailIcon />,
      title: translation("mail"),
      info: contactsInfo.email,
    },
    {
      icon: <PhoneIcon />,
      title: translation("phone"),
      info: contactsInfo.phone,
    },
    {
      icon: <WebIcon />,
      title: translation("site"),
      info: "http://www.baku.diplo.de",
    },
    {
      icon: <LocationIcon color="#130F26" width={16} height={16} />,
      title: translation("location"),
      info: contactsInfo.address,
    },
  ];

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
        <Text style={styles.welcome}>{translation("contactEmbassy")}</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {legalData.map(({ title, info, icon }, index) => (
            <View key={index} style={styles.menuItemWrapper}>
              <Text style={styles.title}>{title}:</Text>
              {icon}
              <Text numberOfLines={3} style={styles.info}>
                {info}
              </Text>
            </View>
          ))}
          <HTML tagsStyles={tagsStyles} source={{ html: contactsInfo.info }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
});
