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
        menuButton: {
            flexDirection: "row",
            height: 68,
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#E7E8F5"
        },
        circeOut: {
            width: 44,
            height: 44,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 44,
            borderWidth: 1,
            borderColor: "#E7E8F5"
        },
        circeInner: {
            width: 12,
            height: 12,
            borderRadius: 12,
            backgroundColor: "#328E71"
        },
        menuTitle: {
            fontSize: 14,
            color: COLORS.grayOne,
            marginLeft: 16,
            fontFamily: FONTS.sfpBold
        },
        saveButton: {
            height: 49,
            borderRadius: 8,
            marginBottom: 20,
            backgroundColor: "#292D32",
            marginHorizontal: 24
        }
    });
    return styles;
};
