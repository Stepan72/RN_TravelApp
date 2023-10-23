import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { sortCategoryData } from "../constants";

export type StackParamList = {
  Welcome: undefined;
  Home: undefined;
};

export type WelcomeScreenProps = NativeStackScreenProps<
  StackParamList,
  "Welcome"
>;

export type HomeScreenProps = NativeStackScreenProps<StackParamList, "Home">;

export type SortCategoryDataType = (typeof sortCategoryData)[number];
