import {
  Alert,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Title from "../components/Title.android";
import NumberContainer from "../components/game/NumberContainer";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import TextInstruction from "../components/TextInstruction";
import Ionicons from "@expo/vector-icons/Ionicons";

import GuessLogItems from "../components/GuessLogItems";

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
  const { height, width } = useWindowDimensions();

  console.log(height, width);

  // console.log("usernumber", userNumber);

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentComputerGuess, setCurrentComputerGuess] =
    useState(initialGuess);
  const [hint, setHint] = useState("");

  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const guessRoundListLength = guessRounds.length;
  // console.log(guessRounds.length);

  useEffect(() => {
    if (currentComputerGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [userNumber, currentComputerGuess, onGameOver]);

  useEffect(() => {
    ((maxBoundary = 100), (minBoundary = 1));
  }, []);

  const nextNumberGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentComputerGuess < userNumber) ||
      (direction === "greater" && currentComputerGuess > userNumber)
    ) {
      Alert.alert("Dont lie!", "you know this is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      setHint("");
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
    setGuessRounds((previousGuess) => [newRandomNumber, ...previousGuess]);
    // console.log("new guess", newRandomNumber);

    if (newRandomNumber > userNumber) {
      setHint("Too high! ");
    } else if (newRandomNumber < userNumber) {
      setHint("Too low! ");
    } else {
      setHint("");
    }
  };

  let content = (
    <>
      {" "}
      <NumberContainer>{currentComputerGuess}</NumberContainer>
      <Title>{hint}</Title>
      <Card>
        <TextInstruction style={styles.instructionText}>
          Higher or Lower
        </TextInstruction>
        <View style={styles.controlButtons}>
          <View style={styles.controlButton}>
            <PrimaryButton onPress={nextNumberGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.controlButton}>
            <PrimaryButton
              onPress={nextNumberGuessHandler.bind(this, "greater")}
            >
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.landscapeButtonContainer}>
          <View style={styles.controlButton}>
            <PrimaryButton onPress={nextNumberGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentComputerGuess}</NumberContainer>
          <View style={styles.controlButton}>
            <PrimaryButton
              onPress={nextNumberGuessHandler.bind(this, "greater")}
            >
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound} style={styles.guessText}>
            {guessRound}
          </Text>
        ))} */}

        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItems
              roundNumber={guessRoundListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  listContainer: {
    padding: 6,
    flex: 1,
  },
  guessText: {
    textAlign: "center",
  },
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
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
  landscapeButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
