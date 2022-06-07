import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";

const Input = (props) => {
  return (
    <View style={{...styles.inputContainer, ...props.style}}>
      <View style={styles.inlineImage}><Image source={props.inputImageLeft} /></View>
      <TextInput
        {...props}
        style={{ ...styles.input, borderBottomRightRadius: props.inputImageRight ? 0 : 10,  borderTopRightRadius: props.inputImageRight ? 0 : 10 }}
      />
      {props.inputImageRight ? <View style={{...styles.inlineImageRight}}><Image source={props.inputImageRight} /></View> : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row'
  },
  input: {
    flex: 8,
    backgroundColor: "#F1F1F1",
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  inlineImage: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    paddingLeft: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10, 
  },
  inlineImageRight: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    paddingLeft: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
