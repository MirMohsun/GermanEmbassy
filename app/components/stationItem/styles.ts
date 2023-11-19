import { StyleSheet } from "react-native";
import { FONTS } from "../../config";

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      height: 150,
      flexDirection: "row",
      paddingTop: 30,
      paddingBottom: 40,
      width: "auto",
      paddingRight: 24,
      overflow: "hidden",
    },
    dashesWrapper: {
      position: "absolute",
      zIndex: 2,
      left: 34,
    },
    dashes: {
      width: 1,
      marginTop: 6,
      height: 6,
      backgroundColor: "#FFFFFF",
    },
    divider: {
      position: "absolute",
      zIndex: 10,
      bottom: 0,
      left: 54,
      right: 24,
      height: 0.5,
      backgroundColor: "#E5E5E8",
    },
    stepWrapper: {
      paddingLeft: 24,
      paddingRight: 10,
    },
    circle: {
      marginTop: 4,
      width: 20,
      height: 20,
      borderRadius: 20,
      backgroundColor: "#FFFFFF",
    },
    contentWrapper: {
      flex: 1,
    },
    title: {
      fontSize: 20,
      color: "#FFFFFF",
      fontFamily: FONTS.sfpSemiBold,
    },
    infoText: {
      fontSize: 14,
      marginLeft: 6,
      color: "#FFFFFF",
      fontFamily: FONTS.sfpSemiBold,
    },
    subText: {
      fontSize: 14,
      marginTop: 6,
      color: "#FFFFFF",
      marginRight: 10,
      fontFamily: FONTS.sfpRegular,
    },
  });
  return styles;
};
