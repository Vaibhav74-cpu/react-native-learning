import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Title from "../components/Title.android";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({ userNumber, guessRounds, onStartNewGame }) {
  const { width, height } = useWindowDimensions();
  console.log(width, height);

  let imageSize = 350;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 150;
  }

  let imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    // <ScrollView style={styles.screen}>
    //       </ScrollView>
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          source={require("../assets/images/goalAchieved.jpg")}
          style={styles.image}
        />
      </View>
      <Text style={styles.guessSummary}>
        Your Opponent's Needed{" "}
        <Text style={styles.highlightText}>{guessRounds}</Text> Round to Guess{" "}
        <Text style={styles.highlightText}>{userNumber}</Text> Number
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;
// console.log(deviceWidth);

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    // height: deviceWidth < 370 ? 250 : 350,
    // width: deviceWidth < 370 ? 250 : 350,
    // borderRadius: deviceWidth < 370 ? 125 : 175,
    borderWidth: 3,
    margin: 30,
    overflow: "hidden",
    borderColor: "black",
  },
  guessSummary: {
    fontSize: deviceWidth < 380 ? 10 : 25,
    textAlign: "center",
    marginBottom: 20,
  },
  highlightText: {
    color: Colors.primary700,
    fontFamily: "open-sans-semi-bold",
  },
});
