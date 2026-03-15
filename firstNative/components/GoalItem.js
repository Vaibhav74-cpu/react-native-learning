import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      onPress={props.deleteGoal.bind(this, props.id)}
      // android_ripple={{ color: "#0f061b" }} // for android
      style={({ pressed }) => pressed && styles.pressItem} // for ios
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
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
  pressItem: {
    opacity: 0.5,
  },
});
