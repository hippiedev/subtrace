import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const Header = () => {
    const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
          style={styles.logo}
          source={require("../assets/images/logo..png")}
        />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
    }
})