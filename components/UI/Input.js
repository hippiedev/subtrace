import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { useState, forwardRef } from "react";

const Input = (props, inputRef) => {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <View
      style={{
        ...styles.inputContainer,
        ...props.style,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: onFocus ? "#1C6DD0" : "#ffffff00",
      }}
    >
      <View
        style={{
          ...styles.inlineImage,
          backgroundColor: onFocus ? "rgba(225, 238, 255, 0.7)" : "#F1F1F1",
        }}
      >
        <Image
          style={{ opacity: onFocus ? 1 : 0.6 }}
          source={props.inputImageLeft}
        />
      </View>
      <TextInput
        {...props}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        style={{
          ...styles.input,
          borderBottomRightRadius: props.inputImageRight ? 0 : 10,
          borderTopRightRadius: props.inputImageRight ? 0 : 10,
          backgroundColor: onFocus ? "rgba(225, 238, 255, 0.7)" : "#F1F1F1",
        }}
      />
      {props.inputImageRight ? (
        <Pressable
          style={{
            ...styles.inlineImageRight,
            backgroundColor: onFocus ? "rgba(225, 238, 255, 0.7)" : "#F1F1F1",
          }}
          onPress={props.togglePasswordView}
        >
          <View
            style={{
              ...styles.inlineImageRight,
              backgroundColor: onFocus ? "rgba(225, 238, 255, 0.7)" : "#F1F1F1",
              paddingLeft: 0,
              flex: 0,
            }}
          >
            <Image
              style={{ opacity: onFocus ? 1 : 0.6 }}
              source={props.inputImageRight}
            />
          </View>
        </Pressable>
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    flex: 8,
    backgroundColor: "#F1F1F1",
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  inlineImage: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    paddingLeft: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  inlineImageRight: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    paddingLeft: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
