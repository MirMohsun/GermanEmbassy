import React, { FC, useMemo, memo } from "react";
import { View, Text } from "react-native";
import { getStyle } from "./styles";
import { ClockIcon } from "../../assets/svg/clockIcon";
import { Path2Icon } from "../../assets/svg/path2icon";
import { useAppContext } from "../../services/config/configAppContext";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../modules/navigation/routes";

interface Props {
  data: any;
  color: string;
}

export const StationItem: FC<Props> = memo(({ data, color }: Props) => {
  const styles = useMemo(() => getStyle(), []);
  const {
    LocalizationContext: { translation },
  } = useAppContext();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
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
        <Text
          numberOfLines={1}
          style={styles.title}
          onPress={() =>
            navigation.navigate(ROUTES.BuildingPreView, { item: data.building })
          }
        >
          {data.name}
        </Text>
        <Text style={styles.subText}>{data.building.name}</Text>
      </View>
      <View>
        <View style={{ flexDirection: "row", paddingBottom: 10 }}>
          <ClockIcon />
          <Text numberOfLines={1} style={styles.infoText}>
            {data.time} {translation("minute")}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Path2Icon />
          <Text numberOfLines={1} style={styles.infoText}>
            {data.distance} {translation("m")}
          </Text>
        </View>
      </View>
    </View>
  );
});
