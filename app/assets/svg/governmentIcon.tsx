import React, { FC } from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export const GovernmentIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
        <Svg
            width={width || 39}
            height={height || 39}
            viewBox="0 0 39 39"
            fill="none"
        >
            <G clipPath="url(#clip0_81_1056)">
                <Path
                    d="M38.2415 38.1952H0.0762791C-0.372267 35.3828 1.24549 33.17 3.69156 32.69C4.02169 32.6319 4.35667 32.6059 4.69181 32.6123C14.3206 32.6123 23.9489 32.6123 33.5767 32.6123C36.3158 32.6123 38.2385 34.556 38.24 37.2951L38.2415 38.1952Z"
                    fill="#424242"
                />
                <Path
                    d="M27.7456 19.2112H10.5289C10.6111 16.0191 13.4444 11.6786 18.5414 11.3467C23.8986 10.9984 27.5243 15.2565 27.7456 19.2112Z"
                    fill="#424242"
                />
                <Path
                    d="M2.97684 19.2516H8.1994V30.4264H2.97684V19.2516Z"
                    fill="#424242"
                />
                <Path
                    d="M30.0765 19.2561H35.2901V30.4353H30.0765V19.2561Z"
                    fill="#424242"
                />
                <Path
                    d="M16.6874 21.4883H21.5706V30.3381H16.6874V21.4883Z"
                    fill="#424242"
                />
                <Path
                    d="M28.532 7.95572H22.5215V0.0209503H28.5231L26.7289 3.97712L28.532 7.95572Z"
                    fill="#424242"
                />
                <Path
                    d="M14.4059 21.4958V30.3501H10.4721V21.4958H14.4059Z"
                    fill="#424242"
                />
                <Path
                    d="M23.8641 21.4883H27.7755V30.3381H23.8641V21.4883Z"
                    fill="#424242"
                />
                <Path
                    d="M18.036 1.52588e-05H20.2205V9.10699H18.036V1.52588e-05Z"
                    fill="#424242"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_81_1056">
                    <Rect width={38.24} height={38.1952} fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
