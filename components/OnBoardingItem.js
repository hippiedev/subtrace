import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import { OnBoardButton } from "../components/UI/Buttons";



const OnBoardingItem = ({item}) => {
    const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image source={item.image} style={[styles.image, {resizeMode: 'contain'}]} />
      <View>
        <Text style={styles.textContainer}><Text>{item.firstText}</Text><Text style={{color: '#1C6DD0'}}>{item.secondText}</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 50,
    paddingHorizontal: 30,
    marginTop: 50,
  },
  image: {
      justifyContent: 'center',
      alignItems: 'center',
  },
  textContainer: {
    fontFamily: "GTAmericaBold",
    fontSize: 28,
    lineHeight: 35,
    color: "#FF6363",
    textAlign: "center",
  },
  text: {},
});

export default OnBoardingItem;
