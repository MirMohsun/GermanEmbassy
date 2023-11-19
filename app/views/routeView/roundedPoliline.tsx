import React, { FC } from "react";
import { View, ViewProps } from "react-native";
import { Polyline } from "react-native-maps";

interface RoundedLinesProps extends ViewProps {
  coordinates: Array<{ latitude: number; longitude: number }>;
  strokeWidth: number;
  strokeColor: string;
}

const RoundedLines: FC<RoundedLinesProps> = ({
  coordinates,
  strokeWidth,
  strokeColor,
  ...otherProps
}) => {
  const roundedCoordinates: Array<{ latitude: number; longitude: number }> = [];

  for (let i = 0; i < coordinates.length - 1; i++) {
    const start = coordinates[i];
    const end = coordinates[i + 1];

    if (i === 0) {
      roundedCoordinates.push(start);
    }

    const numSegments = 10;

    for (let j = 1; j <= numSegments; j++) {
      const fraction = j / numSegments;
      const latitude = parseFloat(
        start.latitude + (end?.latitude - start?.latitude) * fraction
      );
      const longitude = parseFloat(
        start.longitude + (end?.longitude - start?.longitude) * fraction
      );

      roundedCoordinates.push({ latitude, longitude });
    }

    if (i === coordinates.length - 2) {
      roundedCoordinates.push(end);
    }
  }

  return (
    <Polyline
      lineJoin="bevel"
      coordinates={roundedCoordinates}
      strokeWidth={strokeWidth}
      strokeColor={strokeColor}
    />
  );
};

export default RoundedLines;
