import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../colors/Colors";

interface StyleProps {
  [prop: string]: string | number;
}

interface ButtonProps {
  children: React.ReactNode;
  extraStyle?: StyleProps;
  containerStyle?: StyleProps;
  outline?: boolean;
  secondary?: boolean;
  onPress?: () => void;
}

const Button = ({
  children,
  extraStyle,
  outline,
  secondary,
  containerStyle,
  onPress,
}: ButtonProps) => {
  return (
    <View
      style={{
        ...containerStyle,
        ...styles.containerStyle,
      }}
    >
      <TouchableOpacity
        style={{
          width: "100%",
        }}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <View
          style={{
            ...styles.button,
            ...extraStyle,
            backgroundColor:
              !outline && !secondary
                ? Colors.primary
                : !outline && secondary
                ? Colors.secondary
                : outline
                ? "transparent"
                : "",
            borderWidth: outline ? 1 : 0,
            borderColor:
              outline && !secondary
                ? Colors.primary
                : outline && secondary
                ? Colors.secondary
                : "none",
          }}
        >
          <Text
            style={{
              color:
                outline && secondary
                  ? Colors.secondary
                  : outline && !secondary
                  ? Colors.primary
                  : "#fff",
              fontWeight: "600",
            }}
          >
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  containerStyle: {
    marginBottom: 20,
  },
});
