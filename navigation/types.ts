import {NavigatorScreenParams} from '@react-navigation/native';

export type BottomTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Discover: NavigatorScreenParams<HomeStackParamList>;
  Activity: NavigatorScreenParams<HomeStackParamList>;
  Bookmarks: NavigatorScreenParams<HomeStackParamList>;
  Profile: NavigatorScreenParams<HomeStackParamList>;
};

export type MainNavigatorParams = {
  MainTab: NavigatorScreenParams<BottomTabParamList>;
};
