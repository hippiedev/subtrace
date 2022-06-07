import { StyleSheet, Text, View, useWindowDimensions, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import Input from "../components/UI/Input";
import { AuthButton } from "../components/UI/Buttons";

const Login = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Header />

      <View style={styles.formGroup}>
        <View style={styles.headingWrap}>
          <Text style={styles.title}>Welcome back!</Text>
          <Text style={styles.subTitle}>Sign in to your account</Text>
        </View>
        <Input
          blurOnSubmit
          autoCorrect={false}
          autoComplete="username"
          autoCapitalize="none"
          autoFocus={true}
          placeholder="Username"
          placeholderTextColor="#626262"
          textContentType="username"
          inputImageLeft={require('../assets/images/account_outlined.png')}
        />
        <Input
          blurOnSubmit
          autoCorrect={false}
          autoComplete="password"
          autoCapitalize="none"
          placeholder="Password"
          textContentType="password"
          placeholderTextColor="#626262"
          style={{ marginTop: 30 }}
          keyboardType="visible-password"
          inputImageLeft={require('../assets/images/lock_outlined.png')}
          inputImageRight={require('../assets/images/eye.png')}
        />
        <View style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </View>

        <AuthButton buttonStyles={{ marginTop: 33 }} />
        <View style={{position: 'relative', top: 50}}>
          <Image source={require('../assets/images/Line.png')} />
          <Text style={{position: 'absolute', top: -10, left: '28%', backgroundColor: '#fff', paddingHorizontal: 40, fontFamily: 'GTAmerica'}}>login with</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 90}}>
          <Image source={require('../assets/images/google.png')} />
          <Image source={require('../assets/images/facebook.png')} />
        </View>
        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{...styles.subTitle, color: '#898989', marginRight: 10}}>New to subtrace?</Text>
          <Text style={{...styles.subTitle, color: '#1C6DD0'}}>Sign Up</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingVertical: 40,
    paddingTop: 80,
    backgroundColor: "#fff",
  },
  headingWrap: {
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    color: "#1C6DD0",
    fontFamily: "GTAmericaBold",
  },
  subTitle: {
    fontSize: 18,
    fontFamily: "GTAmerica",
    color: "#263238",
  },
  formGroup: {
    flexDirection: "column",
    marginHorizontal: 40,
  },
  forgotPassword: {
    marginTop: 10,
    flexDirection: "row-reverse",
  },
  forgotPasswordText: {
    fontFamily: "GTAmerica",
    fontSize: 14,
    color: "#868686",
  },
});
