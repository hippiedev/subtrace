import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { useRef, useState } from "react";
import Header from "../components/Header";
import Input from "../components/UI/Input";
import { AuthButton } from "../components/UI/Buttons";

const { width, height } = Dimensions.get("screen");

const SignUp = () => {
  const eye_open = require("../assets/images/eye_filled.png");
  const eye_closed = require("../assets/images/eye_blind.png");
  const [viewPassword, setViewPassword] = useState(false);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  return (
    <ScrollView
      showsVerticalScrollIndicator
      contentContainerStyle={[styles.container, { width }]}
    >
      <Header />
      <View style={styles.formGroup}>
        <View style={styles.headingWrap}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subTitle}>
            Create an account to take control of your subscriptions
          </Text>
        </View>
        <Input
          autoCorrect={true}
          autoComplete="name"
          autoCapitalize="words"
          autoFocus={true}
          placeholder="Full name"
          placeholderTextColor="#626262"
          textContentType="name"
          inputImageLeft={require("../assets/images/mdi_account.png")}
          onSubmitEditing={() => emailRef.current.focus()}
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
          inputImageLeft={require("../assets/images/ic_round-alternate-email.png")}
          ref={emailRef}
          onSubmitEditing={() => usernameRef.current.focus()}
        />
        <Input
          autoCorrect={false}
          autoComplete="username"
          autoCapitalize="none"
          placeholder="Username"
          placeholderTextColor="#626262"
          textContentType="username"
          style={{ marginTop: 20 }}
          inputImageLeft={require("../assets/images/account_outlined.png")}
          ref={usernameRef}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          autoCorrect={false}
          autoComplete="password"
          autoCapitalize="none"
          placeholder="Create password"
          textContentType="newPassword"
          secureTextEntry={!viewPassword}
          placeholderTextColor="#626262"
          style={{ marginTop: 20 }}
          keyboardType={viewPassword ? "visible-password" : null}
          inputImageLeft={require("../assets/images/lock_outlined.png")}
          inputImageRight={viewPassword ? eye_closed : eye_open}
          togglePasswordView={() => setViewPassword(!viewPassword)}
          ref={passwordRef}
        />
        <AuthButton buttonStyles={{ marginTop: 33 }} text="Create an account" />
        <View style={{ position: "relative", top: 55 }}>
          <Image source={require("../assets/images/Line.png")} />
          <Text
            style={{
              position: "absolute",
              top: -10,
              left: "25%",
              backgroundColor: "#fff",
              paddingHorizontal: 40,
              fontFamily: "GTAmerica",
            }}
          >
            sign up with
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 90,
          }}
        >
          <Image source={require("../assets/images/google.png")} />
          <Image source={require("../assets/images/facebook.png")} />
        </View>

        <View
          style={{
            marginTop: height * 0.07,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ ...styles.subTitle, color: "#898989", marginRight: 10 }}
          >
            New to subtrace?
          </Text>
          <Text style={{ ...styles.subTitle, color: "#1C6DD0" }}>Log in</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingTop: 80,
    backgroundColor: "#fff",
    paddingBottom: 100,
  },
  headingWrap: {
    marginTop: 50,
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    color: "#1C6DD0",
    fontFamily: "GTAmericaBold",
    marginBottom: 3,
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
});
