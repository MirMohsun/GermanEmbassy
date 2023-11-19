import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../config";

export const getStyle = (width: number, top: number, isMore: boolean) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.grayFour,
    },
    imagesWrapper: {
      width: "100%",
      height: 366,
    },
    img: {
      width,
      height: 366,
    },
    backButtonWrapper: {
      position: "absolute",
      zIndex: 10,
      top: (top || 0) + 20,
      left: 20,
      right: 0,
    },
    paginator: {
      position: "absolute",
      zIndex: 10,
      bottom: 40,
      left: 0,
      right: 0,
    },
    content: {
      backgroundColor: "#FFFFFF",
      position: "absolute",
      zIndex: 1,
      bottom: 0,
      top: 340,
      left: 0,
      right: 0,
      paddingHorizontal: 24,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    title: {
      fontSize: 32,
      marginTop: 20,
      color: "#272830",
      fontFamily: FONTS.sfpBold,
    },
    divider: {
      marginTop: 20,
      marginBottom: 30,
      width: "auto",
      height: 2,
      backgroundColor: "#E7E8F5",
    },
    cover: {
      backgroundColor: "#E7E8F5",
      width: 86,
      height: 114,
    },
    architectWrapper: {
      width: "auto",
      marginBottom: 20,
      flexDirection: "row",
    },
    label: {
      fontSize: 14,
      color: "#272830",
      fontFamily: FONTS.sfpMedium,
    },
    info: {
      fontSize: 18,
      marginTop: 6,
      color: "#1A247F",
      fontFamily: FONTS.sfpBold,
    },
    architectNameWrapper: {
      flex: 1,
      paddingLeft: 20,
      justifyContent: "center",
    },
    date: {
      fontSize: 14,
      marginTop: 6,
      color: "#272830",
      fontFamily: FONTS.sfpBold,
    },
    infoText: {
      fontSize: 16,
      marginTop: 6,
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
  });
  return styles;
};
