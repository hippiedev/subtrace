import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";

export const OnBoardFinishButton = ({ title = "Get Started", onPress }) => {
  return (
    <Pressable android_ripple={{color: "#ffffff"}} onPress={onPress}>
      <View style={styles.onBoardFinish}>
        <Text style={styles.text}>{title}</Text>
        <Image source={require("../../assets/images/Vector.png")} />
      </View>
    </Pressable>
  );
};

export const OnBoardButtons = ({firstButtonText = "Next", secondButtonText = "Skip", firstButtonFunction, secondButtonFunction}) => {
  return (
    <View style={styles.onBoardButtonsWrap}>
      <TouchableOpacity onPress={firstButtonFunction}>
        <View style={styles.onBoardButton}>
          <Text style={styles.text}>{firstButtonText}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={secondButtonFunction}>
        <View
          style={[
            styles.onBoardButton,
            {
              backgroundColor: "transparent",
              borderWidth: 2,
              borderColor: "#1C6DD0",
            },
          ]}
        >
          <Text style={[styles.text, { color: "#1C6DD0" }]}>{secondButtonText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  onBoardFinish: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#1C6DD0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 50,
    marginHorizontal: 40,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "GTAmericaBold",
  },
  onBoardButtonsWrap: {
    flexDirection: "row",
    paddingVertical: 50,
    width: "100%",
    justifyContent: "space-evenly",
  },
  onBoardButton: {
    backgroundColor: "#1C6DD0",
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 15,
  },
});
