import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../colors/Colors";
import Input from "../components/Input";
import Button from "../components/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../paramlists";

interface SignInProps {
  navigation: StackNavigationProp<RootStackParamList, "signin">;
}

const SigninScreen = ({ navigation }: SignInProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigation =
  //   useNavigation<StackNavigationProp<RootStackParamList, "signin">>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Sign In</Text>
          <View
            style={{
              paddingTop: 20,
            }}
          >
            <Input
              onChange={setEmail}
              value={email}
              placeholder="Enter your email"
            />
            <Input
              onChange={setPassword}
              value={password}
              placeholder="Enter your password"
            />
            <Button
              onPress={() =>
                navigation.navigate("chat", {
                  screen: "chatscreen",
                  params: {
                    screen: "chats",
                  },
                })
              }
            >
              Sign In
            </Button>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
              }}
            >
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("signup")}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: Colors.primary,
                  justifyContent: "center",
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgOne,
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: "center",
  },
  header: {
    marginVertical: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.primary,
    height: 50,
    width: "100%",
    backgroundColor: "#dcdcdc",
    paddingHorizontal: 12,
  },
});
