import React, { FC, useMemo, memo } from "react";
import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { getStyle } from "./styles";
import { DotsIcon } from "../../assets/svg/dotsIcon";

interface Props {
    onPress: () => void;
    containerStyle?: StyleProp<ViewStyle>
}

export const MenuButton: FC<Props> = memo(({ containerStyle, ...props }: Props) => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <TouchableOpacity style={[styles.container, containerStyle]} {...props}>
            <DotsIcon />
        </TouchableOpacity>
    );
});