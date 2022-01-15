import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigationState } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { ChatStackParamList, RootStackParamList } from "../paramlists";
import ChatScreen from "../screens/ChatsScreen";
import FriendsScreen from "../screens/FriendsScreen";
import SearchScreen from "../screens/SearchScreen";
import ChatsStack from "./chatsStack";

const ChatTabs = createMaterialTopTabNavigator<ChatStackParamList>();

interface ChatStackProps {
  navigation: StackNavigationProp<RootStackParamList, "chat">;
}

const ChatStack = ({ navigation }: ChatStackProps) => {
  const state = useNavigationState((state) => state);
  const [toggle, setToggle] = useState(false);

  // console.log(state?.routes.findIndex((route) => route.params !== undefined));

  useEffect(() => {
    const paramIndex = state?.routes.findIndex(
      (route) => route.params !== undefined
    );
    if (paramIndex > -1) {
      // console.log(state?.routes[paramIndex].state?.routes[0]?.state);
      navigation.setOptions({
        headerShown:
          state?.routes[paramIndex].state?.routes[0]?.state?.index === 1
            ? false
            : true,
      });
      state?.routes[paramIndex].state?.routes[0]?.state?.index === 1
        ? setToggle(true)
        : setToggle(false);
    }
  }, [state]);

  return (
    <ChatTabs.Navigator
      screenOptions={{
        title: "Chat",
      }}
    >
      <ChatTabs.Screen
        name="chatscreen"
        component={ChatsStack}
        options={{
          title: "Chat",
          tabBarStyle: {
            display: toggle ? "none" : "flex",
          },
          swipeEnabled: toggle ? false : true,
        }}
      />
      <ChatTabs.Screen
        name="friends"
        component={FriendsScreen}
        options={{
          title: "Friends",
        }}
      />
      <ChatTabs.Screen
        name="search"
        component={SearchScreen}
        options={{
          title: "Search",
        }}
      />
    </ChatTabs.Navigator>
  );
};

export default ChatStack;
