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

interface SignUpProps {
  navigation: StackNavigationProp<RootStackParamList, "signup">;
}

const SignupScreen = ({ navigation }: SignUpProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

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
          <Text style={styles.header}>Create Account</Text>
          <View
            style={{
              paddingTop: 20,
            }}
          >
            <Input
              onChange={setName}
              value={name}
              placeholder="Enter your name"
              otherProps={{
                autoCapitalize: "none",
                autoCorrect: false,
              }}
            />
            <Input
              onChange={setEmail}
              value={email}
              placeholder="Enter your email"
              otherProps={{
                textContentType: "emailAddress",
              }}
            />
            <Input
              onChange={setPhone}
              value={phone}
              placeholder="Enter your phone number"
              otherProps={{
                textContentType: "telephoneNumber",
              }}
            />
            <Input
              onChange={setPassword}
              value={password}
              placeholder="Enter your password"
              otherProps={{
                secureTextEntry: true,
                autoCapitalize: "none",
                autoCorrect: false,
                textContentType: "password",
              }}
            />
            <Input
              onChange={setConfirm}
              value={confirm}
              placeholder="Confirm your password"
              otherProps={{
                secureTextEntry: true,
                autoCapitalize: "none",
                autoCorrect: false,
                textContentType: "password",
              }}
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
              Sign Up
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
            <TouchableOpacity onPress={() => navigation.navigate("signin")}>
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

export default SignupScreen;

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
