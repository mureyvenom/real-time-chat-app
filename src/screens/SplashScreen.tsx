import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Colors } from "../colors/Colors";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/no-bg-white.png")}
        style={styles.image}
      />
      <ActivityIndicator size="small" color={Colors.primary} />
      <StatusBar style="light" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 300,
    marginBottom: 20,
    resizeMode: "contain",
  },
});
