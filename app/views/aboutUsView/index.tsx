import React, { FC, useMemo, memo } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { getStyle } from "./styles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { GermanSymbol } from "../../assets/svg/germanSymbol";
import { COLORS } from "../../config";
import { MenuButton } from "../../components/menuButton";
import { BackButton } from "../../components/backButton";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props { }

export const AboutUsView: FC<Props> = memo(({ }: Props) => {
    const styles = useMemo(() => getStyle(), []);
    const info = "The guideline for preventing corruption in the federal administration of July 30, 2004 (RL) determines the legal framework for the tasks of preventing corruption at the headquarters of the Federal Foreign Office and at the diplomatic missions abroad. The Directive aims to provide a guideline for integrity, fair and transparent administrative action in a way that is understandable and uses fewer regulations. Ethical principles and the rejection of corruption should be firmly anchored in the minds of the employees at the headquarters of the Federal Foreign Office and the seconded employees and local staff at the diplomatic missions abroad. Important concerns of corruption prevention at the headquarters of the Federal Foreign Office and at the foreign missions are raising employee awareness of the issue, protection against possible risks of corruption and the maintenance of high ethical and legal standards as an integral part of all administrative activities."
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
                <Text style={styles.welcome}>German Embassy Baku</Text>
                <ScrollView>
                    <Text style={styles.title}>About German Embassy Baku</Text>
                    <Text style={styles.info}>{info}</Text>
                    <Text style={styles.title}>Corruption prevention</Text>
                    <Text style={styles.info}>{info}</Text>
                    <Text style={styles.title}>Our goals</Text>
                    <Text style={styles.info}>{info}</Text>
                    <Text style={styles.title}>Embassy</Text>
                    <Text style={styles.info}>{info}</Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
});
