import React, { FC, useMemo, memo } from "react";
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from "react-native";
import { getStyle } from "./styles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { GermanSymbol } from "../../assets/svg/germanSymbol";
import { COLORS } from "../../config";
import { MenuButton } from "../../components/menuButton";
import { BackButton } from "../../components/backButton";
import { faker } from "@faker-js/faker";
import { ROUTES } from "../../modules/navigation/routes";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props { }

export const ArchitectsView: FC<Props> = memo(({ }: Props) => {
    const styles = useMemo(() => getStyle(), []);
    const navigation: StackNavigationProp<ParamListBase> = useNavigation();

    const mockBuildings = Array.from({ length: 7 }, () => ({
        images: Array.from({ length: 4 }, () => ({ link: faker.image.urlPicsumPhotos({ width: 184, height: 184 }) })),
        title: faker.person.fullName(),
        date: "1960-02-08 - 2000-05-11",
        info: faker.lorem.paragraphs({ min: 20, max: 200 })
    }));

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
                <Text style={styles.welcome}>Architects</Text>
                <FlatList
                    data={mockBuildings}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={(({ item, index }) => (
                        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.ArchitectsPreView, { item })} activeOpacity={0.6} style={styles.menuButtonWrapper}>
                            <View style={{ ...styles.menuButton, paddingRight: index % 2 ? 0 : 6, paddingLeft: index % 2 ? 6 : 0 }}>
                                <Image source={{ uri: item.images[0]?.link }} style={styles.img} />
                                <Text numberOfLines={2} style={styles.menuTitle}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                />
            </View>
        </SafeAreaView>
    );
});
