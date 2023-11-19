import React, { FC, useMemo, memo } from "react";
import { TouchableOpacity, StyleProp, ViewStyle, View } from "react-native";
import { getStyle } from "./styles";
import { ArrowIcon } from "../../assets/svg/arrowIcon";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface Props {
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export const BackButton: FC<Props> = memo(
  ({ containerStyle, ...props }: Props) => {
    const styles = useMemo(() => getStyle(), []);
    const navigation: DrawerNavigationProp<any> = useNavigation();

    const onBackPress = () => {
      navigation.goBack();
    };

    return (
      <TouchableOpacity
        onPress={onBackPress}
        style={[styles.container, containerStyle]}
        {...props}
      >
        <View style={{ transform: [{ rotateZ: "90deg" }] }}>
          <ArrowIcon color="#978686" />
        </View>
      </TouchableOpacity>
    );
  }
);
