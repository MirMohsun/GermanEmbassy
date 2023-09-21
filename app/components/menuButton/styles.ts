import { StyleSheet } from "react-native";

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            justifyContent: "center",
            height: 46,
            width: 46,
            borderRadius: 46,
            backgroundColor: "#292D32"
        }
    });
    return styles;
};