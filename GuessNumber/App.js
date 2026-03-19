import { ImageBackground, StyleSheet } from "react-native";

import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const currentInputNumber = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickNumber={currentInputNumber} />;

  if (userNumber) {
    //number is picked so redirect to game screen
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }
  return (
    <LinearGradient colors={["#1e107b", "#c9a11e"]} style={styles.screenLayout}>
      <ImageBackground
        source={require("./assets/ddice.jpg")}
        style={styles.screenLayout}
        imageStyle={styles.screenImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.screenLayout}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screenLayout: {
    flex: 1,
  },
  screenImage: {
    opacity: 0.3,
  },
});
