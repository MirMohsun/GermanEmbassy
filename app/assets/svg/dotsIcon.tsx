import React, { FC } from "react";
import Svg, { Circle } from "react-native-svg";

export const DotsIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg
            width={width || 23}
            height={height || 5}
            viewBox="0 0 23 5"
            fill="none"
        >
            <Circle cx={2.5} cy={2.5} r={2.5} fill={color || "#FFFFFF"} />
            <Circle cx={11.5} cy={2.5} r={2.5} fill={color || "#FFFFFF"} />
            <Circle cx={20.5} cy={2.5} r={2.5} fill={color || "#FFFFFF"} />
        </Svg>
    );
};
