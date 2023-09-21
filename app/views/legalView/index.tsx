import React, { FC, useMemo, memo } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { getStyle } from "./styles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { GermanSymbol } from "../../assets/svg/germanSymbol";
import { COLORS } from "../../config";
import { MenuButton } from "../../components/menuButton";
import { BackButton } from "../../components/backButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { legalData } from "./legalData";

interface Props { }

export const LegalView: FC<Props> = memo(({ }: Props) => {
    const styles = useMemo(() => getStyle(), []);
    const navigation: StackNavigationProp<ParamListBase> = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grayFour }}>
            <View style={styles.container}>
                <View style={styles.logoWrapper}>
                    <View style={{ ...styles.floatMenuWrapper, left: 0 }}>
                        <BackButton onPress={() => navigation.goBack()} />
                    </View>
                    <View style={{ ...styles.floatMenuWrapper, right: 0 }}>
                        <MenuButton onPress={() => { }} />
                    </View>
                    <GermanSymbol width={36} height={70} />
                    <Text style={styles.logoText}>{"German Embassy \nBaku"}</Text>
                </View>
                <Text style={styles.welcome}>Legal</Text>
                <ScrollView>
                    {legalData.map(({ title, info }, index) => (
                        <View key={index}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.info}>{info}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
});
