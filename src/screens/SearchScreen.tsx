import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Input from "../components/Input";
import Profile from "../components/Profile";
import { ChatStackParamList } from "../paramlists";

interface ChatProps {
  navigation: StackNavigationProp<ChatStackParamList, "search">;
  // route: StackNavigationProp<ChatsStackParamList, "chats">;
}

const SearchScreen = ({ navigation }: ChatProps) => {
  const [search, setSearch] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <Input
        onChange={setSearch}
        value={search}
        placeholder="Search for friends"
      />
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <Profile notAdded={true} />
        <Profile />
        <Profile />
        <Profile notAdded={true} />
        <Profile />
        <Profile />
        <Profile notAdded={true} />
        <Profile />
        <Profile />
        <Profile notAdded={true} />
        <Profile />
        <Profile />
        <Profile notAdded={true} />
        <Profile />
        <Profile />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
