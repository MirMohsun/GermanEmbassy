import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../config";

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.white,
        },
        textWrapper: {
            flex: 1,
            paddingBottom: 180,
            paddingHorizontal: 24,
            justifyContent: "flex-end"
        },
        title: {
            fontSize: 26,
            color: COLORS.black,
            fontFamily: FONTS.sfpSemiBold
        },
        info: {
            fontSize: 14,
            marginTop: 12,
            color: "#5A5B63",
            fontFamily: FONTS.sfpRegular
        },
        buttonWrapper: {
            backgroundColor: "#F4F4F7",
            paddingHorizontal: 24
        }
    });
    return styles;
};