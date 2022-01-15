import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../colors/Colors";

interface BubbleProps {
  type: "to" | "from";
  children?: React.ReactNode;
}

const ChatBubble = ({ type, children }: BubbleProps) => {
  return (
    <View
      style={{
        ...styles.container,
        flexDirection: type === "to" ? "row-reverse" : "row",
      }}
    >
      <View
        style={{
          ...styles.bubble,
          backgroundColor: type === "to" ? Colors.primary : Colors.secondary,
        }}
      >
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>
    </View>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flex: 1,
  },
  bubble: {
    borderRadius: 20,
    padding: 15,
    maxWidth: 220,
  },
  content: {
    color: "#fff",
  },
});
