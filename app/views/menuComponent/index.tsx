import React, { FC, useMemo, memo, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { getStyle } from "./styles";
import { COLORS } from "../../config";

interface Props {}

export const MenuView: FC<Props> = memo(({}: Props) => {
  const styles = useMemo(() => getStyle(), []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.grayFour }}
    >
        
    </SafeAreaView>
  );
});
