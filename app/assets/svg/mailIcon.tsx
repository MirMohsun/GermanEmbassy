import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const MailIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg
            width={width || 17}
            height={height || 17}
            viewBox="0 0 17 17"
            fill="none"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.72556 4.3804C1.41675 4.98648 1.41675 5.77989 1.41675 7.3667V9.63337C1.41675 11.2202 1.41675 12.0136 1.72556 12.6197C1.9972 13.1528 2.43065 13.5863 2.96377 13.8579C3.56986 14.1667 4.36327 14.1667 5.95009 14.1667H11.0501C12.6369 14.1667 13.4303 14.1667 14.0364 13.8579C14.5695 13.5863 15.003 13.1528 15.2746 12.6197C15.5834 12.0136 15.5834 11.2202 15.5834 9.63338V7.36671C15.5834 5.77989 15.5834 4.98648 15.2746 4.3804C15.003 3.84728 14.5695 3.41383 14.0364 3.14219C13.4303 2.83337 12.6369 2.83337 11.0501 2.83337H5.95008C4.36327 2.83337 3.56986 2.83337 2.96377 3.14219C2.43065 3.41383 1.9972 3.84728 1.72556 4.3804ZM4.54493 5.22464C4.3008 5.06189 3.97097 5.12786 3.80822 5.37198C3.64547 5.61611 3.71144 5.94594 3.95556 6.10869L8.20556 8.94203C8.38401 9.06099 8.61648 9.06099 8.79493 8.94203L13.0449 6.10869C13.2891 5.94594 13.355 5.61611 13.1923 5.37198C13.0295 5.12786 12.6997 5.06189 12.4556 5.22464L8.50024 7.86152L4.54493 5.22464Z"
                fill={color || "#22282F"}
            />
        </Svg>
    );
};
