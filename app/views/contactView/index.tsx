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
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface Props {}

export const ContactView: FC<Props> = memo(({}: Props) => {
  const styles = useMemo(() => getStyle(), []);
  const description =
    "The embassy supports citizens with disabilities and endeavors to make it easier for them to access the employees within the framework of the structural conditions.For accessibility questions or if you need assistance, please contact us.The entrances to the ISR Plaza building , in which the embassy is located, are only partially barrier-free. High curbs, uneven pavement and heavy traffic make access to both the main entrance and the visitor entrance of the embassy considerably difficult. The car park located directly in front of the embassy's visitor entrance can be used in special cases by prior arrangement.The airlock and all doors of the building are of sufficient width, but are not barrier-free and have no automatic closers or openers. All floors of the embassy are accessible by elevators. There are no disabled toilets in the embassy building.Two of the six elevators are provided with Braille. There is no other structural or technical support for blind and visually impaired people.";
  const navigation: StackNavigationProp<ParamListBase> = useNavigation();
  const drawerNavigation: DrawerNavigationProp<ParamListBase> = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grayFour }}>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <View style={{ ...styles.floatMenuWrapper, left: 0 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <View style={{ ...styles.floatMenuWrapper, right: 0 }}>
            <MenuButton onPress={() => drawerNavigation.openDrawer()} />
          </View>
          <GermanSymbol width={36} height={70} />
          <Text style={styles.logoText}>{"German Embassy \nBaku"}</Text>
        </View>
        <Text style={styles.welcome}>Contact the embassy</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {legalData.map(({ title, info, icon }, index) => (
            <View key={index} style={styles.menuItemWrapper}>
              <Text style={styles.title}>{title}</Text>
              {icon}
              <Text numberOfLines={3} style={styles.info}>
                {info}
              </Text>
            </View>
          ))}
          <Text style={styles.titleSecond}>Note on barrier-free access</Text>
          <Text style={styles.description}>{description}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
});
