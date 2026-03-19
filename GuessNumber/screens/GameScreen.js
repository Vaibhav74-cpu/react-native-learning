import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import TextInstruction from "../components/TextInstruction";

const generateRandomBetween = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  console.log("usernumber", userNumber);

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentComputerGuess, setCurrentComputerGuess] =
    useState(initialGuess);

  useEffect(() => {
    if (currentComputerGuess === userNumber) {
      onGameOver();
    }
  }, [userNumber, currentComputerGuess, onGameOver]);

  const nextNumberGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentComputerGuess < userNumber) ||
      (direction === "greater" && currentComputerGuess > userNumber)
    ) {
      Alert.alert("Dont lie!", "you know this is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentComputerGuess;
    } else {
      minBoundary = currentComputerGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentComputerGuess,
    );
    setCurrentComputerGuess(newRandomNumber);
    console.log("new guess", newRandomNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentComputerGuess}</NumberContainer>
      <Card>
        <TextInstruction style={styles.instructionText}>
          Higher or Lower
        </TextInstruction>
        <View style={styles.controlButtons}>
          <View style={styles.controlButton}>
            <PrimaryButton onPress={nextNumberGuessHandler.bind(this, "lower")}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.controlButton}>
            <PrimaryButton
              onPress={nextNumberGuessHandler.bind(this, "greater")}
            >
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>{/* Rounds */}</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  controlButtons: {
    flexDirection: "row",
  },
  controlButton: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 16,
  },
});
