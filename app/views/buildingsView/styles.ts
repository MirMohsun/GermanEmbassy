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
        info: {
            fontSize: 14,
            marginBottom: 20,
            color: COLORS.grayOne,
            fontFamily: FONTS.sfpMedium
        },
        menuButtonWrapper: {
            width: "50%",
            height: 229,
            marginBottom: 34
        },
        menuButton: {
            width: "100%",
            height: 229
        },
        menuTitle: {
            fontSize: 14,
            marginTop: 4,
            color: "#272830",
            fontFamily: FONTS.sfpSemiBold
        }
    });
    return styles;
};
