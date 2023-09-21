import React, { FC, useMemo, memo } from "react";
import { TouchableOpacity, Text, TouchableOpacityProps, StyleProp, ViewStyle, TextStyle } from "react-native";
import { getStyle } from "./styles";

type Props = {
    title: string
    isReady?: boolean
    containerStyle?: StyleProp<ViewStyle>
    labelStyle?: StyleProp<TextStyle>
} & TouchableOpacityProps

export const MainButton: FC<Props> = memo(({ title = "", isReady = true, containerStyle, labelStyle, ...props }: Props) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <TouchableOpacity disabled={!isReady} style={[styles.container, containerStyle]} {...props}>
            <Text numberOfLines={1} style={[styles.title, labelStyle]}>{title}</Text>
        </TouchableOpacity>
    );
});