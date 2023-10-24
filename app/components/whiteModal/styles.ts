import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

export const getStyle = (width: number, top: number) => {
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "rgba(0, 0, 0, 0.5)"
      backgroundColor: "white",
    },
    overlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    paginator: {
      width: width * 0.85,
      position: "absolute",
      zIndex: 10,
      bottom: 40,
      left: 0,
      right: 0,
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
  });
  return styles;
};
