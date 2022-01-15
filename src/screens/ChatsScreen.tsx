import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Profile from "../components/Profile";
import { ChatsStackParamList } from "../paramlists";

interface ChatProps {
  navigation: StackNavigationProp<ChatsStackParamList, "chats">;
  // route: StackNavigationProp<ChatsStackParamList, "chats">;
}

const ChatsScreen = ({ navigation }: ChatProps) => {
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

export default ChatsScreen;

const styles = StyleSheet.create({});
