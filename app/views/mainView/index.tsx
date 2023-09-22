import React, { FC, useMemo, memo } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { getStyle } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { GermanSymbol } from "../../assets/svg/germanSymbol";
import { COLORS } from "../../config";
import { menuData } from "./menuData";
import { MenuButton } from "../../components/menuButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { ROUTES } from "../../modules/navigation/routes";

interface Props { }

export const MainView: FC<Props> = memo(({ }: Props) => {
    const styles = useMemo(() => getStyle(), []);
    const navigation: StackNavigationProp<any> = useNavigation();

    const onPressMenuItem = (goToScreen: string) => {
        //navigation.navigate(goToScreen);
        navigation.navigate(ROUTES.RouteView)
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grayFour }}>
            <View style={styles.container}>
                <View style={styles.logoWrapper}>
                    <View style={styles.floatMenuWrapper}>
                        <MenuButton onPress={() => { }} />
                    </View>
                    <GermanSymbol width={36} height={70} />
                    <Text style={styles.logoText}>{"German Embassy \nBaku"}</Text>
                </View>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.info}>Happy to see you again</Text>
                <FlatList
                    data={menuData}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={(({ item, index }) => (
                        <View style={{ ...styles.menuButtonWrapper, paddingRight: index % 2 ? 0 : 6, paddingLeft: index % 2 ? 6 : 0 }}>
                            <TouchableOpacity onPress={() => onPressMenuItem(item.goTo)} style={styles.menuButton}>
                                {item.icon}
                                <Text numberOfLines={1} style={{ ...styles.menuTitle, color: item.title === "Route A" ? "#3D39F0" : item.title === "Route B" ? "#F03939" : "#000000" }}>{item.title}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                />
            </View>
        </SafeAreaView>
    );
});
