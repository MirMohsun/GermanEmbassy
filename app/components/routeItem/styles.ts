import { StyleSheet } from "react-native";
import { FONTS } from "../../config";

export const getStyle = (isRed?: boolean) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      height: 216,
      width: "auto",
      paddingHorizontal: 24,
      backgroundColor: isRed ? "#E3001B" : "#3D39F0",
    },
    titleWrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    title: {
      fontSize: 26,
      marginRight: 14,
      color: "#FFFFFF",
      fontFamily: FONTS.sfpSemiBold,
    },
    circle: {
      width: 20,
      height: 20,
      borderRadius: 20,
      backgroundColor: isRed ? "#F03939" : "#7471EF",
      borderWidth: 2,
      borderColor: isRed ? "#FDAEB8" : "#9391F6",
    },
    pathWrapper: {
      marginTop: 16,
      marginBottom: 6,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    path: {
      position: "absolute",
      zIndex: -1,
      width: "100%",
      height: 2,
      backgroundColor: isRed ? "#FDAEB8" : "#9391F6",
    },
    locationWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    locationText: {
      fontSize: 12,
      color: "#FFFFFF",
      fontFamily: FONTS.sfpMedium,
    },
    itemsWrapper: {
      width: "auto",
      marginTop: 34,
      flexDirection: "row",
    },
    itemWrapper: {
      flex: 0.8,
      alignItems: "center",
      flexDirection: "row",
      borderLeftWidth: 1,
      borderLeftColor: "#FFFFFF",
      paddingLeft: 10,
    },
    itemTitle: {
      fontSize: 14,
      color: "#FFFFFF",
      marginLeft: 10,
      fontFamily: FONTS.sfpMedium,
    },
    middleWrapper: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginHorizontal: 4,
    },
  });
  return styles;
};
