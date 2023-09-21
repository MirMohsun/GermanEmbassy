import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../config";

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.white
        },
        logoWrapper: {
            flexDirection: "row"
        },
        logoText: {
            marginLeft: 16,
            fontSize: 16,
            color: COLORS.grayOne,
            fontFamily: FONTS.sfpRegular
        },
        info: {
            textAlign: "center",
            marginHorizontal: 40,
            fontSize: 16,
            color: COLORS.grayOne,
            fontFamily: FONTS.sfpMedium
        }
    });
    return styles;
};
