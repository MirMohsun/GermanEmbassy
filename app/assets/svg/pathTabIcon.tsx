import React, { FC } from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

export const PathTabIcon: FC<{
  width?: number;
  height?: number;
  color?: string;
}> = ({ color }) => {
  return (
    <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
      <G clipPath="url(#clip0_9_102)" fill={color ? color : "#A5A7B8"}>
        <Path d="M1.5 9.006h3v.27c0 2.155-.007 4.31 0 6.465a2.242 2.242 0 002.315 2.249 2.244 2.244 0 002.175-2.155c.019-.687.006-1.375.006-2.062V5.27A5.23 5.23 0 0112.92.172c3.047-.821 6.196 1.328 6.532 4.461.024.201.037.404.04.606.003 2.187.003 4.373 0 6.56v.18h-2.994v-.27V5.3c0-1.073-.666-1.941-1.679-2.215a2.251 2.251 0 00-2.812 2.07c-.012.335 0 .671 0 1.006v9.58a5.239 5.239 0 01-3.292 4.881c-3.194 1.295-6.784-.843-7.167-4.265a5.53 5.53 0 01-.039-.583V9.215l-.01-.209zM0 2.99A2.997 2.997 0 013.024.008a3 3 0 012.741 4.16 2.998 2.998 0 01-4.898.943A3.003 3.003 0 010 2.99zM18.011 14.998a3.001 3.001 0 012.927 3.6 2.998 2.998 0 01-4.107 2.16 2.999 2.999 0 011.18-5.76z" />
      </G>
      <Defs>
        <ClipPath id="clip0_9_102">
          <Path fill="#fff" d="M0 0H21V21H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
