import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import Input from '../components/UI/Input';
import { AuthButton } from '../components/UI/Buttons';

const {width, height} = Dimensions.get("screen");

const SignUp = () => {
  return (
    <View style={[styles.container, {width}]}>
        <Header />
      <View style={styles.formGroup}>
        <View style={styles.headingWrap}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subTitle}>Create an account to take control of your subscriptions</Text>
        </View>
        <Input
          autoCorrect={true}
          autoComplete="name"
          autoCapitalize="words"
          autoFocus={true}
          placeholder="Full name"
          placeholderTextColor="#626262"
          textContentType="name"
          inputImageLeft={require('../assets/images/mdi_account.png')}
        />
        <Input
          autoCorrect={true}
          autoComplete="email"
          autoCapitalize="none"
          placeholder="Email address"
          placeholderTextColor="#626262"
          textContentType="emailAddress"
          style={{ marginTop: 20 }}
          keyboardType="email-address"
          inputImageLeft={require('../assets/images/ic_round-alternate-email.png')}
        />
        <Input
          autoCorrect={false}
          autoComplete="username"
          autoCapitalize="none"
          placeholder="Username"
          placeholderTextColor="#626262"
          textContentType="username"
          style={{ marginTop: 20 }}
          inputImageLeft={require('../assets/images/account_outlined.png')}
        />
        <Input
          autoCorrect={false}
          autoComplete="password"
          autoCapitalize="none"
          placeholder="Create password"
          textContentType="password"
          placeholderTextColor="#626262"
          style={{ marginTop: 20 }}
          inputImageLeft={require('../assets/images/lock_outlined.png')}
        />
        <AuthButton buttonStyles={{ marginTop: 33 }} text="Create an account" />
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingVertical: 40,
        paddingTop: 80,
        backgroundColor: "#fff",
    },
    headingWrap: {
        marginTop: 50,
        marginBottom: 40,
      },
      title: {
        fontSize: 30,
        color: "#1C6DD0",
        fontFamily: "GTAmericaBold",
        marginBottom: 3
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
})