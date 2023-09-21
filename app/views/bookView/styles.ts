import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../config";

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 26,
            backgroundColor: COLORS.grayFour
        },
        logoWrapper: {
            paddingTop: 30,
            paddingBottom: 28,
            justifyContent: "center",
            flexDirection: "row"
        },
        floatMenuWrapper: {
            position: "absolute",
            zIndex: 10,
            top: 30
        },
        logoText: {
            marginLeft: 10,
            fontSize: 10,
            color: COLORS.grayOne,
            fontFamily: FONTS.sfpRegular
        },
        welcome: {
            fontSize: 26,
            color: COLORS.grayOne,
            marginBottom: 14,
            fontFamily: FONTS.sfpBold
        },
        title: {
            flex: 0.3,
            fontSize: 16,
            color: "#242424",
            fontFamily: FONTS.sfpBold
        },
        info: {
            fontSize: 16,
            marginTop: 8,
            color: "#272830",
            fontFamily: FONTS.sfpMedium
        }
    });
    return styles;
};
