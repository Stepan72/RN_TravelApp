import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreenProps } from "../types";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import CategoriesList from "../components/CategoriesList";
import SortCategories from "../components/SortCategories";
import DestinationsList from "../components/DestinationsList";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen({ route, navigation }: HomeScreenProps) {
  const topMargin = Platform.OS === "ios" ? "mt-3" : "mt-10";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={`space-y-6 ${topMargin}`}
      >
        {/* avatar */}
        <View className="mx-5 flex-row justify-between items-center mb-8">
          <Text
            className="font-bold text-neutral-700"
            style={{ fontSize: wp(7) }}
          >
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/avatar.png")}
              style={{ width: hp(6), height: hp(6) }}
            />
          </TouchableOpacity>
        </View>
        {/* search bar view */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 pl-6 space-x-2">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder="Search destination"
              placeholderTextColor="gray"
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            />
          </View>
        </View>
        {/* categories */}
        <View className="mb-4">
          <CategoriesList />
        </View>
        {/* sort categories */}
        <View className="mb-4">
          <SortCategories />
        </View>
        {/* destinations */}
        <View>
          <DestinationsList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
