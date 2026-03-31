import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.guessContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
  guessContainer: {
    borderColor: Colors.yellow600,
    borderWidth: 4,
    padding: deviceWidth < 370 ? 14 : 24,
    margin: deviceWidth < 370 ? 14 : 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: deviceWidth < 370 ? 30 : 34,
    fontFamily: "open-sans-semi-bold",
    // fontWeight: "bold",
    color: Colors.yellow600,
  },
});
