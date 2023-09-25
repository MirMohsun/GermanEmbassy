import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const ShareIcon: FC<{
  width?: number;
  height?: number;
  color?: string;
}> = ({ width, height, color }) => {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
      <Path
        d="M10 4a2 2 0 10-1.985-1.753L3.388 4.56a2 2 0 100 2.88l4.627 2.313a2 2 0 10.596-1.192L3.986 6.246a2.021 2.021 0 000-.494L8.612 3.44c.36.347.849.56 1.388.56z"
        fill="#000"
      />
    </Svg>
  );
};
