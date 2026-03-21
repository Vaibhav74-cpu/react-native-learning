import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.guessContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  guessContainer: {
    borderColor: Colors.yellow600,
    borderWidth: 4,
    padding: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    margin: 24,
  },
  numberText: {
    fontSize: 34,
    fontFamily: "open-sans-semi-bold",
    // fontWeight: "bold",
    color: Colors.yellow600,
  },
});
