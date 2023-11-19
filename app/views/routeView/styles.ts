import { Dimensions, StatusBar, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../config";

const statusBarHeight = StatusBar.currentHeight;
const { width, height } = Dimensions.get("screen");

export const getStyle = (isMapActive: boolean) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 26,
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
      fontSize: 16,
      marginBottom: 8,
      color: "#242424",
      fontFamily: FONTS.sfpBold,
    },
    info: {
      fontSize: 14,
      marginBottom: 30,
      color: "#242424",
      fontFamily: FONTS.sfpRegular,
    },
    headerContainer: {
      position: "absolute",
      top: 20 + statusBarHeight,
      left: 20,
      zIndex: 10,
    },
    headerTabContainer: {
      position: "absolute",
      top: 20 + statusBarHeight,
      left: width / 2 - 68,
      zIndex: 10,
      flexDirection: "row",
    },
    headerDrawerContainer: {
      position: "absolute",
      top: 20 + statusBarHeight,
      right: 20,
      zIndex: 10,
    },
    leftButtonContainer: {
      width: 68,
      height: 43,
      backgroundColor: isMapActive ? "black" : "white",
      borderTopStartRadius: 12,
      borderBottomStartRadius: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    rightButtonContainer: {
      width: 68,
      height: 43,
      backgroundColor: !isMapActive ? "black" : "white",
      borderTopEndRadius: 12,
      borderBottomEndRadius: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    markerStyle: {
      width: 32,
      height: 32,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    markerInner: {
      backgroundColor: "white",
      width: 16,
      height: 16,
      borderRadius: 10,
    },
  });
  return styles;
};
