
import { StyleSheet, Text, View } from "react-native";
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

const styles = StyleSheet.create({
  listItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    marginVertical: 8,
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
