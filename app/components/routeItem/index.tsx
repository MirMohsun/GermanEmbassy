import React, { FC, useMemo, memo, useEffect } from "react";
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  View,
  Text,
} from "react-native";
import { getStyle } from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { ArrowSecondIcon } from "../../assets/svg/arrowSecondIcon";
import { ClockIcon } from "../../assets/svg/clockIcon";
import { Path2Icon } from "../../assets/svg/path2icon";

interface Props {
  isRed?: boolean;
  name: string;
  addressFrom: string;
  addressTo: string;
  containerStyle?: StyleProp<ViewStyle>;
  distance: string;
  time: string;
  stationCount: number;
}

export const RouteItem: FC<Props> = memo(
  ({
    containerStyle,
    isRed,
    name,
    addressFrom,
    addressTo,
    distance,
    time,
    stationCount,
  }: Props) => {
    const styles = useMemo(() => getStyle(isRed), [isRed]);

    const locationItems = [
      {
        icon: <View style={styles.circle} />,
        value: `${stationCount} stations`,
      },
      { icon: <ClockIcon />, value: time },
      { icon: <Path2Icon />, value: distance },
    ];

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.container, containerStyle]}
      >
        <View style={styles.titleWrapper}>
          <Text numberOfLines={1} style={styles.title}>
            {name}
          </Text>
          <ArrowSecondIcon />
        </View>
        <View style={styles.pathWrapper}>
          <View style={styles.circle} />
          <View style={styles.path} />
          <View style={styles.circle} />
        </View>
        <View style={styles.locationWrapper}>
          <Text numberOfLines={1} style={styles.locationText}>
            {addressFrom}
          </Text>
          <Text numberOfLines={1} style={styles.locationText}>
            {addressTo}
          </Text>
        </View>
        <View style={styles.itemsWrapper}>
          {locationItems.map(({ icon, value }, index) => (
            <View
              key={value}
              style={[styles.itemWrapper, index == 1 && styles.middleWrapper]}
            >
              {icon}
              <Text numberOfLines={1} style={styles.itemTitle}>
                {value}
              </Text>
            </View>
          ))}
        </View>
      </TouchableOpacity>
    );
  }
);
