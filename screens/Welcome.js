import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { OnBoardButtons } from '../components/UI/Buttons';
import Header from '../components/Header';

const Welcome = ({navigation}) => {
  const {width, height} = useWindowDimensions();
  const goToLogin = () => {
    navigation.navigate('Login')
  }
  return (
    <View style={[styles.container, {width, height: '100%'}]}>
      <Image style={styles.image} source={require('../assets/images/Account-rafiki1.jpg')} />
     <Text style={styles.title} >Welcome to Subtrace</Text>
     <Text style={styles.subtext}>Manage all your subscriptions from one place</Text>
     <OnBoardButtons firstButtonFunction={goToLogin} firstButtonText='Log In' secondButtonText='Sign Up' />
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    marginTop: 140,
    marginBottom: 50,
  },
  title: {
    color: '#1C6DD0',
    fontSize: 30,
    fontFamily: 'GTAmericaBold',
    marginBottom: 8
  },
  subtext: {
    fontFamily: 'GTAmerica',
    fontSize: 20,
    textAlign: 'center',
    width: '80%',
    lineHeight: 25
  }
})