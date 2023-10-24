import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const Path3Icon: FC<{
  width?: number;
  height?: number;
  color?: string;
}> = ({ width, height, color }) => {
  return (
    <Svg width={24} height={30} viewBox="0 0 24 30" fill="none">
      <Path
        d="M20.485 21.152L12 29.637l-8.485-8.485c-4.687-4.686-4.687-12.284 0-16.97 4.686-4.687 12.284-4.687 16.97 0 4.687 4.686 4.687 12.284 0 16.97zM12 15.333A2.667 2.667 0 1012 10a2.667 2.667 0 000 5.333z"
        fill={color ? color : "#3D39F0"}
      />
    </Svg>
  );
};
