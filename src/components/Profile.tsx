import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../colors/Colors";
import { RootStackParamList } from "../paramlists";
import { Feather } from "@expo/vector-icons";

interface ProfileProps {
  // onPress?: () => void;
  notAdded?: boolean;
}

type ProfileNav = StackNavigationProp<RootStackParamList, "splash">;

const Profile = ({ notAdded }: ProfileProps) => {
  const navigation = useNavigation<ProfileNav>();

  return (
    <TouchableOpacity
      activeOpacity={0.3}
      style={{
        width: "100%",
      }}
      onPress={() =>
        navigation.navigate("chat", {
          screen: "chatscreen",
          params: {
            screen: "chat",
          },
        })
      }
    >
      <View style={styles.container}>
        <View>
          <Image
            source={require("../../assets/images/profile.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.profileDetails}>
          <Text style={styles.header}>Contact Name</Text>
          <Text style={styles.text}>
            Last message sent or received or status
          </Text>
        </View>
        {notAdded ? (
          <View style={styles.addContainer}>
            <TouchableOpacity>
              <View>
                <Feather name="plus" size={24} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    height: 45,
    width: 45,
    borderRadius: 22.5,
    resizeMode: "cover",
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: Colors.secondary,
    flexDirection: "row",
    marginBottom: 10,
  },
  profileDetails: {
    marginHorizontal: 15,
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
    flex: 1,
  },
  header: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  text: {
    color: "rgba(255, 255, 255, 0.7)",
    marginTop: 4,
  },
  addContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
