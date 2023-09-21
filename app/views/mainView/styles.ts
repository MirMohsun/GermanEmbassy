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
            paddingBottom: 74,
            justifyContent: "center",
            flexDirection: "row"
        },
        floatMenuWrapper: {
            position: "absolute",
            zIndex: 10,
            top: 30,
            right: 0
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
            fontFamily: FONTS.sfpSemiBold
        },
        info: {
            fontSize: 14,
            marginBottom: 20,
            color: COLORS.grayOne,
            fontFamily: FONTS.sfpMedium
        },
        menuButtonWrapper: {
            width: "50%",
            height: 160,
            marginBottom: 12
        },
        menuButton: {
            width: "100%",
            height: 160,
            borderWidth: 1,
            borderColor: "#BDBDBD",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center"
        },
        menuTitle: {
            fontSize: 14,
            marginTop: 4,
            fontFamily: FONTS.sfpSemiBold
        }
    });
    return styles;
};
