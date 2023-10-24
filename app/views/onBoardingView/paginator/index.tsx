import React, { FC, useMemo, memo } from "react";
import { View, useWindowDimensions } from "react-native";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { getStyle } from "./styles";

interface Props {
  data: any;
  color?: string;
  progress: SharedValue<number>;
}

export const Paginator: FC<Props> = memo(({ data, color, progress }: Props) => {
  const styles = useMemo(() => getStyle(), []);
  const { width: SIZE } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_: any, index: number) => {
        const inputRange = [
          (index - 1) * SIZE,
          index * SIZE,
          (index + 1) * SIZE,
        ];
        const rDotStyle = useAnimatedStyle(() => {
          const width = interpolate(
            progress.value,
            inputRange,
            [10, 40, 10],
            Extrapolate.CLAMP
          );
          const backgroundColor = interpolateColor(progress.value, inputRange, [
            color || "#76767a",
            color || "#38383D",
            color || "#76767a",
          ]);
          return { width, backgroundColor };
        });
        return <Animated.View key={index} style={[styles.dot, rDotStyle]} />;
      })}
    </View>
  );
});
