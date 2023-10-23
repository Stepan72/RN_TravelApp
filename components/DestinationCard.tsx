import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { DestinationType } from "../types";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
useNavigation;
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../types";

type Props = NativeStackScreenProps<StackParamList, "Destination">;
type DestinationNavigationProp = Props["navigation"];

export default function DestinationCard({
  title,
  duration,
  distance,
  weather,
  price,
  shortDescription,
  longDescription,
  image,
}: DestinationType) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigation<DestinationNavigationProp>();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate("Destination", {
            title,
            duration,
            distance,
            weather,
            price,
            shortDescription,
            longDescription,
            image,
          });
        }}
        style={{ width: wp(44), height: wp(65) }}
        className="flex justify-end relative p-4 py-6 space-y-2 mb-5"
      >
        <Image
          source={image}
          style={{ width: wp(44), height: wp(65), borderRadius: 35 }}
          className="absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={{
            width: wp(44),
            height: hp(15),
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
        <TouchableOpacity
          onPress={() => {
            setIsFavorite((prevValue) => !prevValue);
          }}
          className="absolute top-1 right-3 rounded-full p-3"
          style={{ backgroundColor: "rgba(255,255,255, 0.4)" }}
        >
          <HeartIcon size={wp(5)} color={isFavorite ? "red" : "white"} />
        </TouchableOpacity>
        <Text className="text-white font-semibold" style={{ fontSize: wp(4) }}>
          {title}
        </Text>
        <Text className="text-white" style={{ fontSize: wp(2.5) }}>
          {shortDescription}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
