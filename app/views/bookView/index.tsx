import React, { FC, useMemo, memo, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { getStyle } from "./styles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { GermanSymbol } from "../../assets/svg/germanSymbol";
import { COLORS } from "../../config";
import { MenuButton } from "../../components/menuButton";
import { BackButton } from "../../components/backButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useAppSelector } from "../../hooks/useAppSelector";
import HTML from "react-native-render-html";
import RNFetchBlob from "rn-fetch-blob";

interface Props {}

export const BookView: FC<Props> = memo(({}: Props) => {
  const [isMore, setIsMore] = useState(false);

  const styles = useMemo(() => getStyle(isMore), [isMore]);
  const navigation: StackNavigationProp<ParamListBase> = useNavigation();
  const drawerNavigation: DrawerNavigationProp<ParamListBase> = useNavigation();
  const { bookInfo } = useAppSelector((state) => state.Book);

  console.log("bookInfo", bookInfo);
  const tagsStyles = {
    p: {
      color: "black",
    },
    h4: {
      color: "black",
    },
  };

  const handleOnDownload = async () => {
    RNFetchBlob.config({
      fileCache: true,
    })
      .fetch("GET", bookInfo.pdf, {})
      .then((res) => {
        console.log("The file saved to ", res.path());
      });
  };

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
        <Text style={styles.welcome}>{bookInfo?.title}</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 20 }}
          contentContainerStyle={{ paddingBottom: isMore ? 140 : 30 }}
        >
          <Image
            resizeMode="contain"
            style={{ width: "auto", height: 400 }}
            source={{ uri: bookInfo?.img_url }}
          />
          <View style={{ flexDirection: "row" }}>
            <Image
              resizeMode="contain"
              style={{ width: 100, height: 100, borderRadius: 50 }}
              source={{ uri: bookInfo?.writer_img_url }}
            />
            <View style={{ paddingLeft: 8 }}>
              <Text style={styles.authorTitle}>
                {bookInfo?.writer_name_surname}
              </Text>
              <HTML
                baseStyle={{ width: "80%" }}
                tagsStyles={tagsStyles}
                source={{ html: bookInfo?.writer_content }}
              />
            </View>
          </View>
          <Text style={styles.title}>INFO:</Text>
          <HTML tagsStyles={tagsStyles} source={{ html: bookInfo?.content }} />
          <TouchableOpacity
            onPress={() => handleOnDownload()}
            style={styles.readButton}
          >
            <Text style={styles.readTitle}>Read book</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
});
