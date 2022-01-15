import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TextInputProps,
} from "react-native";
import { Colors } from "../colors/Colors";

interface StyleProps {
  [prop: string]: string | number;
}

interface OtherProps extends TextInputProps {}

interface InputProps {
  placeholder?: string;
  containerStyle?: StyleProps;
  inputStyle?: StyleProps;
  value?: string;
  onChange: Function;
  otherProps?: OtherProps;
}

const Input = ({
  placeholder,
  containerStyle,
  inputStyle,
  value,
  onChange,
  otherProps,
}: InputProps) => {
  return (
    <View
      style={{
        ...containerStyle,
        marginBottom: 20,
      }}
    >
      <TextInput
        style={{
          ...inputStyle,
          ...styles.inputStyle,
        }}
        value={value}
        onChangeText={(e) => onChange(e)}
        placeholder={placeholder}
        {...otherProps}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
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
