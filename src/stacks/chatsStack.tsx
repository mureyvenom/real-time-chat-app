import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { ChatsStackParamList, RootStackParamList } from "../paramlists";
import ChatsScreen from "../screens/ChatsScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator<ChatsStackParamList>();

interface ChatStackProps {
  route: StackNavigationProp<RootStackParamList, "chat">;
}

const ChatsStack = ({ route }: ChatStackProps) => {
  //   console.log(route);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="chats"
        component={ChatsScreen}
        options={{
          title: "Chats",
        }}
      />
      <Stack.Screen
        name="chat"
        component={ChatScreen}
        options={{
          title: "Contact Name",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default ChatsStack;
