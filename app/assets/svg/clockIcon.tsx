import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const ClockIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
        <Svg
            width={width || 15}
            height={height || 15}
            viewBox="0 0 15 15"
            fill="none"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM7 7.49991V3H8V7.29289L10.8536 10.1464L10.1464 10.8536L7.14645 7.85355C7.04882 7.75592 7 7.62787 7 7.49991Z"
                fill="#E7E6E6"
            />
        </Svg>
    );
};
