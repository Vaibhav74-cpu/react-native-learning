import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function TextInstruction({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default TextInstruction;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.yellow600,
    fontSize: 25,
  },
});
