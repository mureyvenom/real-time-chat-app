import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { Colors } from "../colors/Colors";
import { RootStackParamList } from "../paramlists";
import SigninScreen from "../screens/SignInScreen";
import SignupScreen from "../screens/SignupScreen";
import SplashScreen from "../screens/SplashScreen";
import ChatStack from "./chatStack";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserDetails } from "../redux/user/user.selectors";
import { userObjectType } from "../redux/user/user.actions";

const Stack = createStackNavigator<RootStackParamList>();

interface userType {
  user: userObjectType;
}

const MainStack = ({ user }: userType) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return (
    <Stack.Navigator>
      {showSplash ? (
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
      ) : null}
      {!user._id ? (
        <>
          <Stack.Screen
            name="signup"
            component={SignupScreen}
            options={{
              headerShown: false,
              title: "Signup",
            }}
          />
          <Stack.Screen
            name="signin"
            component={SigninScreen}
            options={{
              title: "Sign In",
              headerStyle: {
                backgroundColor: Colors.bgOne,
              },
              headerTintColor: "#fff",
            }}
          />
        </>
      ) : null}
      <Stack.Screen
        name="chat"
        component={ChatStack}
        options={{
          title: "Chat",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUserDetails,
});

export default connect(mapStateToProps)(MainStack);
