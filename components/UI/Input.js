import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Input = (props) => {
  return(
  <TextInput {...props} style={{...styles.input, ...props.style}} />)
};

export default Input;

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: "#F1F1F1",
        paddingHorizontal: 10,
        paddingVertical: 16,
        borderRadius: 10,
    }
});
