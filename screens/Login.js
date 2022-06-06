import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Input from '../components/UI/Input';

const Login = () => {
    const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Header />
      <View style={styles.inputGroup}>
        <Input
          blurOnSubmit
          autoCorrect={false}
          autoComplete="username"
          autoCapitalize="none"
          autoFocus={true}
          placeholder="Username"
          placeholderTextColor="#626262"
        />
        <Input
          blurOnSubmit
          autoCorrect={false}
          autoComplete="password"
          autoCapitalize="none"
          placeholder="Password"
          placeholderTextColor="#626262"
          style={{marginTop: 30}}
        />
      </View>
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingVertical: 40,
        paddingTop: 80,
        backgroundColor: "#fff",
    },
    inputGroup: {
        flexDirection: 'column',
        marginHorizontal: 40,
        marginTop: 40,
    }
})