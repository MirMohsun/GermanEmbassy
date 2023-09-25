import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ROUTES } from "./routes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { COLORS, FONTS } from "../../config";
import { BookIcon } from "../../assets/svg/bookIcon";
import { GovernmentIcon } from "../../assets/svg/governmentIcon";
import { BuildingIcon } from "../../assets/svg/buildingIcon";
import { PeopleIcon } from "../../assets/svg/peopleIcon";
import { LockIcon } from "../../assets/svg/lockIcon";
import { ContactIcon } from "../../assets/svg/contactIcon";
import { LanguageIcon } from "../../assets/svg/languageIcon";
import { ShareIcon } from "../../assets/svg/shareIcon";

export const CustomDrawerContent = () => {
  const navigation: StackNavigationProp<any> = useNavigation();

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Hello!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate(ROUTES.BookView)}
        >
          <BookIcon />
          <Text style={styles.buttonTitle}>Book pdf</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate(ROUTES.ArchitectsView)}
        >
          <PeopleIcon />
          <Text style={styles.buttonTitle}>Architects</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate(ROUTES.BuildingsView)}
        >
          <BuildingIcon />
          <Text style={styles.buttonTitle}>Buildings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate(ROUTES.AboutUsView)}
        >
          <GovernmentIcon />
          <Text style={styles.buttonTitle}>About us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate(ROUTES.LanguagesView)}
        >
          <LanguageIcon />
          <Text style={styles.buttonTitle}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate(ROUTES.ContactView)}
        >
          <ContactIcon />
          <Text style={styles.buttonTitle}>Contact us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate(ROUTES.LegalView)}
        >
          <LockIcon />
          <Text style={styles.buttonTitle}>Legal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <ShareIcon />
        <Text style={[styles.bottomTitle, { marginLeft: 8 }]}>
          Share with your friend
        </Text>
        <Text style={[styles.bottomTitle, { marginHorizontal: 8 }]}>-</Text>
        <Text style={styles.bottomTitle}>App version 21.03.1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.sfpBold,
    fontSize: 32,
    fontWeight: "500",
    lineHeight: 38,
    letterSpacing: -0.20000000298023224,
    textAlign: "left",
    color: COLORS.black,
  },
  drawerButton: {
    width: "45%",
    height: 108,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: COLORS.grayFour,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
  buttonTitle: {
    fontFamily: FONTS.sfpBold,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: "left",
    color: COLORS.black,
  },
  buttonsContainer: {
    width: "80%",
    height: "75%",
    alignSelf: "center",
    flexWrap: "wrap",
    alignContent: "space-around",
    flexDirection: "row",
  },
  headerContainer: {
    width: "90%",
    flexDirection: "row",
    height: 50,
    marginVertical: 16,
    marginHorizontal: 20,
  },
  bottomTitle: {
    fontFamily: FONTS.sfpSemiBold,
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
    color: COLORS.black,
  },
  bottomContainer: {
    flexDirection: "row",
    width: "80%",
    height: 24,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "bottom",
    marginTop: 80,
  },
});
