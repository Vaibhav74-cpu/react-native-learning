// ****************** topics:  components , layout , styling , make adaptive and responsive ui -  learning through this app *********************************************

import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans-semi-bold": require("./assets/fonts/Open Sans SemiBold Italic 600.ttf"),
  });

  const currentInputNumber = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onPickNumber={currentInputNumber} />;

  if (userNumber) {
    //number is picked so redirect to game screen
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        guessRounds={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={["#1e107b", "#c9a11e"]}
        style={styles.screenLayout}
      >
        <ImageBackground
          source={require("./assets/ddice.jpg")}
          style={styles.screenLayout}
          imageStyle={styles.screenImage}
          resizeMode="cover"
        >
          <SafeAreaView style={styles.screenLayout}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
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
