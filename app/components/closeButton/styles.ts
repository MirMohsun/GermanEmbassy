import { StyleSheet } from "react-native";

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: 46,
      width: 46,
      borderRadius: 46,
      backgroundColor: "white",
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 5.62,
      elevation: 7,
    },
  });
  return styles;
};
