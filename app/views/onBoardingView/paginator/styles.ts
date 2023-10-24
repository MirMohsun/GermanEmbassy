import { StyleSheet } from "react-native";

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "center",
    },
    dot: {
      height: 10,
      borderRadius: 10,
      marginRight: 10,
    },
  });
  return styles;
};
