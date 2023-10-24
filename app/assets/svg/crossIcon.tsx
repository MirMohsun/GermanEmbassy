import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const CrossIcon: FC<{ width?: number; height?: number; color: string }> =
  ({ width, height, color }) => {
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
          d="M10.416 11.5L6.358 7.442l1.084-1.084 4.058 4.058 4.058-4.058 1.084 1.084-4.058 4.058 4.058 4.058-1.084 1.084-4.058-4.058-4.058 4.058-1.084-1.084 4.058-4.058z"
          fill={color ? color : "black"}
        />
      </Svg>
    );
  };
