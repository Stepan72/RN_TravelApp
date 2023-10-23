import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParamList = {
  Welcome: undefined;
  Home: undefined;
};

export type WelcomeScreenProps = NativeStackScreenProps<
  StackParamList,
  "Welcome"
>;
