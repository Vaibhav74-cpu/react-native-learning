
import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.yellow600,
    borderWidth: 2,
    borderColor: Colors.yellow600,
    padding: 12,
  },
});
