import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const CloseIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
        <Svg
            width={width || 23}
            height={height || 23}
            viewBox="0 0 23 23"
            fill="none"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4158 11.5L6.35791 7.44214L7.44214 6.35791L11.5 10.4158L15.5579 6.35791L16.6421 7.44214L12.5843 11.5L16.6421 15.5579L15.5579 16.6421L11.5 12.5843L7.44214 16.6421L6.35791 15.5579L10.4158 11.5Z"
                fill="black"
            />
        </Svg>
    );
};
