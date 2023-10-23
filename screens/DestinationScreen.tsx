import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { DestinationScreenProps } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import {
  ClockIcon,
  HeartIcon,
  MapPinIcon,
  SunIcon,
} from "react-native-heroicons/solid";
import { theme } from "../theme";

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
    isFavorite,
  } = route.params;

  return (
    <View className="bg-white flex-1">
      <StatusBar style="light" />
      {/* destination image */}
      <Image source={image} style={{ width: wp(100), height: hp(55) }} />
      {/* backButton */}
      <SafeAreaView className="flex-row items-center justify-between w-full absolute">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full ml-4"
          style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
        >
          <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          className="p-2 rounded-full mr-4"
          style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
        >
          <HeartIcon
            size={wp(7)}
            strokeWidth={4}
            color={isFavorite ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {/* title & description */}
      <View
        className="px-5 flex flex-1 justify-between bg-white pt-8 -mt-14"
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
      >
        <ScrollView className="space-y-5" showsVerticalScrollIndicator={false}>
          <View className="flex-row justify-between items-start">
            <Text
              style={{ fontSize: wp(7) }}
              className="font-bold text-neutral-700 flex-1"
            >
              {title}
            </Text>
            <Text
              style={{ fontSize: wp(6), color: theme.text }}
              className="font-semibold"
            >
              ${price}
            </Text>
          </View>
          {/* description */}
          <Text
            style={{ fontSize: wp(3.7) }}
            className="tracking-wide text-neutral-700 mb-2"
          >
            {longDescription}
          </Text>
          {/* badges */}
          <View className="flex-row justify-between mx-1">
            <View className="flex-row space-x-2 items-start">
              <ClockIcon color="skyblue" size={wp(7)} />
              <View className="flex space-y-2">
                <Text
                  className="font-bold text-neutral-700"
                  style={{ fontSize: wp(4.5) }}
                >
                  {duration}
                </Text>
                <Text className="tracking-wide text-neutral-600">Duration</Text>
              </View>
            </View>
            <View className="flex-row space-x-2 items-start">
              <MapPinIcon color="#f87171" size={wp(7)} />
              <View className="flex space-y-2">
                <Text
                  className="font-bold text-neutral-700"
                  style={{ fontSize: wp(4.5) }}
                >
                  {distance}
                </Text>
                <Text className="tracking-wide text-neutral-600">Distance</Text>
              </View>
            </View>
            <View className="flex-row space-x-2 items-start">
              <SunIcon color="orange" size={wp(7)} />
              <View className="flex space-y-2">
                <Text
                  className="font-bold text-neutral-700"
                  style={{ fontSize: wp(4.5) }}
                >
                  {weather}
                </Text>
                <Text className="tracking-wide text-neutral-600">Sunny</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* book button */}
        <TouchableOpacity
          className="mb-6 mx-auto flex justify-center items-center rounded-full"
          style={{
            backgroundColor: theme.bg(0.7),
            height: wp(15),
            width: wp(50),
          }}
        >
          <Text className="text-white font-bold" style={{ fontSize: wp(5.5) }}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
