import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const ArrowSecondIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg
            width={width || 24}
            height={height || 24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M19 12L5 12"
                stroke={color || "#FFFFFF"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M13 18L19 12"
                stroke={color || "#FFFFFF"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M13 6L19 12"
                stroke={color || "#FFFFFF"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};
