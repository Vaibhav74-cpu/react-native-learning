import { StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "green",
    borderRadius: 6,
    margin: 8,
    padding: 8,
  },
  goalText: {
    color: "white",
    fontSize: 16,
  },
});
