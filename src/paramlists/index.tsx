import { NavigatorScreenParams } from "@react-navigation/native";

export type ChatsStackParamList = {
  chats: undefined;
  chat: undefined;
};

export type ChatStackParamList = {
  chatscreen: NavigatorScreenParams<ChatsStackParamList>;
  friends: undefined;
  search: undefined;
};

export type RootStackParamList = {
  splash: undefined;
  signup: undefined;
  signin: undefined;
  chat: NavigatorScreenParams<ChatStackParamList>;
};
