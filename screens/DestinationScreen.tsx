import { View, Text } from "react-native";
import React from "react";
import { DestinationScreenProps } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DestinationScreen({
  route,
  navigation,
}: DestinationScreenProps) {
  const {
    title,
    duration,
    distance,
    weather,
    price,
    shortDescription,
    longDescription,
    image,
  } = route.params;

  return (
    <SafeAreaView>
      <Text>{title}</Text>
    </SafeAreaView>
  );
}
