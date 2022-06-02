import { StyleSheet, Text, View, Animated, useWindowDimensions } from 'react-native'
import React from 'react'

const Pagination = ({data, scrollX}) => {
    const {width} = useWindowDimensions();
  return (
    <View style={{flexDirection: 'row', height: 10}}>
      {
          data.map((_, i) => {
              const inputRange = [(i -1) * width, i * width, (i + 1) * width];

              const dotWidth = scrollX.interpolate({
                  inputRange,
                  outputRange: [5, 40, 5],
                  extrapolate: 'clamp',
              })
              const backgroundColor = scrollX.interpolate({
                  inputRange,
                  outputRange: ['#1C6DD0', '#FF6363', '#1C6DD0'],
                  extrapolate: 'clamp',
              })
              return <Animated.View style={[styles.dot, {width: dotWidth, backgroundColor: backgroundColor}]} key={i.toString()} />
          })
      }
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
    dot: {
        height: 5,
        borderRadius: 10,
        backgroundColor: '#1C6DD0',
        marginHorizontal: 3,
    }
})