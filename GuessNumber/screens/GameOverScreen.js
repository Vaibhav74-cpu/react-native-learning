import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({ userNumber, guessRounds, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
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

const styles = StyleSheet.create({
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
    height: 350,
    width: 350,
    borderRadius: 175,
    borderWidth: 3,
    margin: 30,
    overflow: "hidden",
    borderColor: "black",
  },
  guessSummary: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
  },
  highlightText: {
    color: Colors.primary700,
    fontFamily: "open-sans-semi-bold",
  },
});
