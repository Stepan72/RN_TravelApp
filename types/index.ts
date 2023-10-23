import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { sortCategoryData } from "../constants";
import { ImageProps } from "react-native";

export type StackParamList = {
  Welcome: undefined;
  Home: undefined;
  Destination: {
    title: string;
    duration: string;
    distance: string;
    weather: string;
    price: number;
    shortDescription: string;
    longDescription: string;
    image: ImageProps;
  };
};

export type WelcomeScreenProps = NativeStackScreenProps<
  StackParamList,
  "Welcome"
>;

export type DestinationScreenProps = NativeStackScreenProps<
  StackParamList,
  "Destination"
>;

export type HomeScreenProps = NativeStackScreenProps<StackParamList, "Home">;

export type SortCategoryDataType = (typeof sortCategoryData)[number];

export type DestinationType = {
  title: string;
  duration: string;
  distance: string;
  weather: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  image: ImageProps;
};
