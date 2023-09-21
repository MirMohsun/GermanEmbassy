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
        menuItemWrapper: {
            width: "auto",
            height: 60,
            borderBottomWidth: 1,
            flexDirection: "row",
            alignItems: "center",
            borderBottomColor: "#E7E8F5"
        },
        title: {
            flex: 0.3,
            fontSize: 16,
            color: "#242424",
            fontFamily: FONTS.sfpBold
        },
        info: {
            flex: 0.7,
            marginLeft: 4,
            fontSize: 14,
            color: "#242424",
            fontFamily: FONTS.sfpRegular
        },
        titleSecond: {
            marginTop: 30,
            fontSize: 16,
            color: "#242424",
            fontFamily: FONTS.sfpSemiBold
        },
        description: {
            marginTop: 10,
            marginBottom: 20,
            fontSize: 14,
            color: "#242424",
            fontFamily: FONTS.sfpRegular
        }
    });
    return styles;
};
