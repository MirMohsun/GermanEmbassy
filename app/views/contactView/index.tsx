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
import { getContactsInfo } from "../../modules/saga/contactsInfo/action";
import { MailIcon } from "../../assets/svg/mailIcon";
import { PhoneIcon } from "../../assets/svg/phoneIcon";
import { WebIcon } from "../../assets/svg/webIcon";
import { LocationIcon } from "../../assets/svg/locationIcon";
import { useAppSelector } from "../../hooks/useAppSelector";
import HTML from "react-native-render-html";

interface Props {}

export const ContactView: FC<Props> = memo(({}: Props) => {
  const styles = useMemo(() => getStyle(), []);
  const description =
    "The embassy supports citizens with disabilities and endeavors to make it easier for them to access the employees within the framework of the structural conditions.For accessibility questions or if you need assistance, please contact us.The entrances to the ISR Plaza building , in which the embassy is located, are only partially barrier-free. High curbs, uneven pavement and heavy traffic make access to both the main entrance and the visitor entrance of the embassy considerably difficult. The car park located directly in front of the embassy's visitor entrance can be used in special cases by prior arrangement.The airlock and all doors of the building are of sufficient width, but are not barrier-free and have no automatic closers or openers. All floors of the embassy are accessible by elevators. There are no disabled toilets in the embassy building.Two of the six elevators are provided with Braille. There is no other structural or technical support for blind and visually impaired people.";
  const navigation: StackNavigationProp<ParamListBase> = useNavigation();
  const drawerNavigation: DrawerNavigationProp<ParamListBase> = useNavigation();
  const dispatch = useDispatch();

  const { contactsInfo } = useAppSelector((state) => state.ContactsInfo);

  useEffect(() => {
    dispatch(getContactsInfo());
  }, []);

  const legalData = [
    {
      icon: <MailIcon />,
      title: "Email:",
      info: contactsInfo.email,
    },
    {
      icon: <PhoneIcon />,
      title: "Phone:",
      info: contactsInfo.phone,
    },
    {
      icon: <WebIcon />,
      title: "Site:",
      info: "http://www.baku.diplo.de",
    },
    {
      icon: <LocationIcon color="#130F26" width={16} height={16} />,
      title: "Location:",
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
          <Text style={styles.logoText}>{"German Embassy \nBaku"}</Text>
        </View>
        <Text style={styles.welcome}>Contact the embassy</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {legalData.map(({ title, info, icon }, index) => (
            <View key={index} style={styles.menuItemWrapper}>
              <Text style={styles.title}>{title}</Text>
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
