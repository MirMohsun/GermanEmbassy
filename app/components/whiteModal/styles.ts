import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../config";

export const getStyle = (width: number, top: number) => {
  const styles = StyleSheet.create({
    container: {
      width: "90%",
      backgroundColor: "#FFF",
      alignSelf: "center",
      borderRadius: 16,
    },
    overlay: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    paginator: {
      height: 10,
      position: "absolute",
      zIndex: 10,
      bottom: 10,
      left: 0,
      right: 0,
      paddingRight: 25,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      flexDirection: "row",
      marginLeft: 25,
    },
    modal: {
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 10,
    },
    contentContainer: {
      flex: 0.75,
      justifyContent: "center",
      alignItems: "center",
    },
    imagesWrapper: {
      width: width * 0.85,
      height: 200,
      alignSelf: "center",
      marginVertical: 16,
      borderRadius: 12,
    },
    img: {
      width: width * 0.85,
      height: 200,
      borderRadius: 12,
    },
    backButtonWrapper: {
      position: "absolute",
      zIndex: 10,
      top: -10,
      right: -8,
    },
    titleContainer: { width: "90%", alignSelf: "center" },
    title: {
      fontFamily: FONTS.sfpMedium,
      fontSize: 18,
      fontWeight: "700",
      lineHeight: 21,
      letterSpacing: 0.01,
      textAlign: "left",
      color: COLORS.black,
    },
    rowContainer: { flexDirection: "row", marginVertical: 12 },
    rowLeft: {
      fontFamily: FONTS.sfpRegular,
      fontSize: 14,
      fontWeight: "bold",
      lineHeight: 17,
      letterSpacing: 0.04,
      textAlign: "left",
      color: COLORS.black,
    },
    rowRight: {
      fontFamily: FONTS.sfpRegular,
      fontSize: 14,
      fontWeight: "600",
      lineHeight: 17,
      letterSpacing: 0.04,
      textAlign: "left",
      marginLeft: 4,
      marginBottom: 4,
      maxWidth: "75%",
    },
  });
  return styles;
};
