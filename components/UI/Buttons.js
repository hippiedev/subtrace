import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Touchable,
  useWindowDimensions,
} from "react-native";

export const OnBoardFinishButton = ({ title = "Get Started", onPress }) => {
  return (
    <TouchableOpacity>
      <View style={styles.onBoardFinish}>
        <Text style={styles.text}>{title}</Text>
        <Image source={require("../../assets/images/Vector.png")} />
      </View>
    </TouchableOpacity>
  );
};

export const OnBoardButtons = () => {
  return (
    <View style={styles.onBoardButtonsWrap}>
      <TouchableOpacity>
        <View style={styles.onBoardButton}>
          <Text style={styles.text}>Next</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
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
          <Text style={[styles.text, { color: "#1C6DD0" }]}>Skip</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  onBoardFinish: {
    paddingHorizontal: 20,
    paddingVertical: 23,
    backgroundColor: "#1C6DD0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 35,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "GTAmerica",
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
