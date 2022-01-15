import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Profile from "../components/Profile";
import { ChatsStackParamList, ChatStackParamList } from "../paramlists";

interface ChatProps {
  navigation: StackNavigationProp<ChatStackParamList, "friends">;
  // route: StackNavigationProp<ChatsStackParamList, "chats">;
}

const FriendsScreen = ({ navigation }: ChatProps) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </ScrollView>
    </View>
  );
};

export default FriendsScreen;

const styles = StyleSheet.create({});
