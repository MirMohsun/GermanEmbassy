import React, { FC, useMemo, memo } from "react";
import { View, Text } from "react-native";
import { getStyle } from "./styles";
import { ClockIcon } from "../../assets/svg/clockIcon";
import { Path2Icon } from "../../assets/svg/path2icon";

interface Props {
  data: any;
}

export const StationItem: FC<Props> = memo(({ data }: Props) => {
  const styles = useMemo(() => getStyle(), []);

  return (
    <View style={styles.container}>
      <View style={styles.dashesWrapper}>
        {new Array(20).fill("path").map((_, index) => (
          <View key={index} style={styles.dashes} />
        ))}
      </View>
      <View style={styles.divider} />
      <View style={styles.stepWrapper}>
        <View style={styles.circle} />
      </View>
      <View style={styles.contentWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          {data.name}
        </Text>
        <Text style={styles.subText}>{data.building.name}</Text>
      </View>
      <View>
        <View style={{ flexDirection: "row", paddingBottom: 10 }}>
          <ClockIcon />
          <Text numberOfLines={1} style={styles.infoText}>
            {data.time} min
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Path2Icon />
          <Text numberOfLines={1} style={styles.infoText}>
            {data.distance} km
          </Text>
        </View>
      </View>
    </View>
  );
});
