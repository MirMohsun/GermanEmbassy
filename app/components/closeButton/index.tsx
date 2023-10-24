import React, { FC, useMemo, memo } from "react";
import { TouchableOpacity, StyleProp, ViewStyle, View } from "react-native";
import { getStyle } from "./styles";
import { CrossIcon } from "../../assets/svg/crossIcon";

interface Props {
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export const CloseButton: FC<Props> = memo(
  ({ containerStyle, onPress }: Props) => {
    const styles = useMemo(() => getStyle(), []);

    return (
      <TouchableOpacity
        onPress={() => onPress()}
        style={[styles.container, containerStyle]}
      >
        <View style={{ transform: [{ rotateZ: "90deg" }] }}>
          <CrossIcon color="#978686" />
        </View>
      </TouchableOpacity>
    );
  }
);
