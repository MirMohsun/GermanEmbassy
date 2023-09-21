import { StyleSheet } from "react-native";
import { FONTS } from "../../config";

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            justifyContent: "center",
            height: 58,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#575B7E"
        },
        title: {
            fontSize: 16,
            color: "#242424",
            fontFamily: FONTS.sfpSemiBold
        }
    });
    return styles;
};