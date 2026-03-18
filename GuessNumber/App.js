import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#1e107b", "#c9a11e"]} style={styles.screen}>
      <ImageBackground
        source={require("./assets/ddice.jpg")}
        style={styles.screen}
        imageStyle={styles.screenImage}
        resizeMode="cover"
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenImage: {
    opacity: 0.30,
  },
});
