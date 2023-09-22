import React, { FC, useMemo, memo } from "react";
import { View, Text } from "react-native";
import { getStyle } from "./styles";
import { ClockIcon } from "../../assets/svg/clockIcon";
import { Path2Icon } from "../../assets/svg/path2icon";

interface Props {}

export const StationItem: FC<Props> = memo(({ }: Props) => {
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
                <Text numberOfLines={1} style={styles.title}>Station 01</Text>
                <Text style={styles.subText}>A two-story mansion built in 1896 on 28 May (former Telephonnaya) Street, 43</Text>
            </View>
            <View>
                <View style={{ flexDirection: "row", paddingBottom: 10 }}>
                    <ClockIcon />
                    <Text numberOfLines={1} style={styles.infoText}>20 min</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Path2Icon />
                    <Text numberOfLines={1} style={styles.infoText}>10 km</Text>
                </View>
            </View>
        </View>
    );
});