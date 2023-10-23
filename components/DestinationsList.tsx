import { View, Text } from "react-native";
import React from "react";
import { destinationData } from "../constants";
import DestinationCard from "./DestinationCard";

export default function DestinationsList() {
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {destinationData.map((el, index) => {
        return <DestinationCard key={index} {...el} />;
      })}
    </View>
  );
}
