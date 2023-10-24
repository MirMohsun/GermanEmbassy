import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../config";

export const getStyle = (isMore: boolean) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 14,
      backgroundColor: COLORS.grayFour,
    },
    logoWrapper: {
      paddingTop: 30,
      paddingBottom: 28,
      justifyContent: "center",
      flexDirection: "row",
    },
    floatMenuWrapper: {
      position: "absolute",
      zIndex: 10,
      top: 30,
    },
    logoText: {
      marginLeft: 10,
      fontSize: 10,
      color: COLORS.grayOne,
      fontFamily: FONTS.sfpRegular,
    },
    welcome: {
      fontSize: 26,
      color: COLORS.grayOne,
      marginBottom: 14,
      fontFamily: FONTS.sfpBold,
    },
    title: {
      flex: 0.3,
      fontSize: 16,
      color: "#242424",
      fontFamily: FONTS.sfpBold,
    },
    authorTitle: {
      fontSize: 16,
      fontWeight: "bold",
      lineHeight: 18,
      letterSpacing: 0,
      textAlign: "left",
      fontFamily: FONTS.sfpBold,
      color: "#242424",
    },
    readTitle: {
      fontSize: 17,
      fontWeight: "600",
      lineHeight: 20,
      letterSpacing: 0,
      textAlign: "center",
      fontFamily: FONTS.sfpBold,
      color: "white",
    },
    info: {
      fontSize: 16,
      marginTop: 8,
      color: "#272830",
      fontFamily: FONTS.sfpMedium,
    },
    gradient: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 150,
    },
    arrowButton: {
      position: "absolute",
      zIndex: 12,
      left: 0,
      right: 0,
      alignItems: "center",
      bottom: 50,
      transform: [{ rotateZ: `${isMore ? 180 : 0}deg` }],
    },
    readButton: {
      width: "90%",
      height: 50,
      backgroundColor: "#272830",
      borderRadius: 8,
      marginHorizontal: 24,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      marginVertical: 40,
    },
  });
  return styles;
};
