import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../colors/Colors";
import { FontAwesome } from "@expo/vector-icons";
import ChatBubble from "../components/ChatBubble";

const ChatScreen = () => {
  const scrollViewRef: any = useRef();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })!
          }
        >
          <ChatBubble type="to"></ChatBubble>
          <ChatBubble type="to"></ChatBubble>
          <ChatBubble type="from"></ChatBubble>
          <ChatBubble type="from"></ChatBubble>
          <ChatBubble type="to"></ChatBubble>
          <ChatBubble type="to"></ChatBubble>
          <ChatBubble type="to"></ChatBubble>
          <ChatBubble type="from"></ChatBubble>
          <ChatBubble type="from"></ChatBubble>
          <ChatBubble type="to"></ChatBubble>
        </ScrollView>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              marginRight: 15,
            }}
          >
            <TextInput
              style={styles.textBox}
              placeholder="Enter your message"
            />
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.sendButton}>
                <FontAwesome name="send-o" size={18} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  chatBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textBox: {
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  sendButton: {
    height: 40,
    width: 40,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
