import {useState, useRef} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Animated, View } from "react-native";
import Header from '../components/Header';
import OnBoardingItem from "../components/OnBoardingItem";
import Pagination from "../components/Pagination";
import { OnBoardButtons, OnBoardFinishButton } from "../components/UI/Buttons";
import slides from "../slides";

const OnBoarding = ({navigation}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOnBoardFinish = () => {
      navigation.replace('Welcome');
    }

    const scrollX = useRef(new Animated.Value(0)).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const scrollTo = () => {
      if (currentIndex < slides.length - 1) {
        slidesRef.current.scrollToIndex({index: currentIndex + 1});
      }
      else {
        console.log(currentIndex);
      }
    }

    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={{ flex: 3, alignItems: "center" }}>
          <FlatList
            data={slides}
            renderItem={({ item }) => <OnBoardingItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
            disableScrollViewPanResponder
          />

          <Pagination data={slides} scrollX={scrollX} />
        </View>
        {currentIndex === 2 ? (
          <OnBoardFinishButton onPress={handleOnBoardFinish} />
        ) : (
          <OnBoardButtons firstButtonFunction={scrollTo} secondButtonFunction={handleOnBoardFinish} />
        )}
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flex: 1,
      height: "100%",
      paddingTop: 80,
    }
})


  export default OnBoarding
  