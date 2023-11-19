import React, { FC, useMemo, memo, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { getStyle } from "./styles";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { GermanSymbol } from "../../assets/svg/germanSymbol";
import { useAppContext } from "../../services/config/configAppContext";

interface Props {}

export const SplashView: FC<Props> = memo(({}: Props) => {
  const styles = useMemo(() => getStyle(), []);
  const { _setIsSplashLoading } = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      _setIsSplashLoading(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const {
    LocalizationContext: { translation },
  } = useAppContext();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <GermanSymbol />
        </View>
      </View>
      <Text style={styles.info}>{translation("welcomeMessage")}</Text>
    </SafeAreaView>
  );
});
