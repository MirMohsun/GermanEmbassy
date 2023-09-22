import React, { FC, useMemo, memo } from "react";
import { SafeAreaView } from "react-native";
import { getStyle } from "./styles";
import { COLORS } from "../../config";
import { RouteItem } from "../../components/routeItem";
import { StationItem } from "../../components/stationItem";

interface Props { }

export const RouteView: FC<Props> = memo(({ }: Props) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grayFour }}>
            <RouteItem />
            <RouteItem isRed />
            <StationItem />
            <StationItem />
        </SafeAreaView>
    );
});
