import React, { FC, useMemo, memo } from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { getStyle } from "./styles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { GermanSymbol } from "../../assets/svg/germanSymbol";
import { COLORS, IMAGES } from "../../config";
import { MenuButton } from "../../components/menuButton";
import { BackButton } from "../../components/backButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { faker } from "@faker-js/faker";
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface Props {}

export const BookView: FC<Props> = memo(({}: Props) => {
  const styles = useMemo(() => getStyle(), []);
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
        <Text style={styles.welcome}>Alman Book</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image style={{ width: "auto", height: 530 }} source={IMAGES.book} />
          <Text style={styles.title}>INFO:</Text>
          <Text style={styles.info}>
            {faker.lorem.paragraphs({ min: 10, max: 20 })}
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
});
