import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { sortCategoryData } from "../constants";
import { SortCategoryDataType } from "../types";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../theme";

export default function SortCategories() {
  const [activeSort, setActiveSort] = useState<SortCategoryDataType>("Popular");

  return (
    <View className="flex-row justify-around items-center mx-4 bg-neutral-100 rounded-full p-2 px-4 space-x-2">
      {sortCategoryData.map((el, index) => {
        const activeButtonStyle = el === activeSort ? "bg-white shadow" : "";

        return (
          <TouchableOpacity
            onPress={() => {
              setActiveSort(el);
            }}
            key={index}
            className={`p-3 px-4 rounded-full ${activeButtonStyle}`}
          >
            <Text
              className="font-semibold"
              style={{
                fontSize: wp(4),
                color: el === activeSort ? theme.text : "gray",
              }}
            >
              {el}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
