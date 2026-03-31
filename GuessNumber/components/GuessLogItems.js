import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

function GuessLogItems({ roundNumber, guess }) {
  return (
    <View style={styles.listItems}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>opponent Guess : {guess}</Text>
    </View>
  );
}

export default GuessLogItems;

const deviceWidth = Dimensions.get("window").width;
// console.log(deviceWidth);

const styles = StyleSheet.create({
  listItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 40,
    padding: deviceWidth > 500 ? 4 : 10,
    marginVertical: deviceWidth > 500 ? 4 : 6,
    borderColor: Colors.primary700,
    width: "100%",
    backgroundColor: Colors.yellow600,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontSize: 20,
    marginHorizontal: 8,
    fontWeight: "bold",
  },
});
