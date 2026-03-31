import { Dimensions, Platform, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    // fontFamily: "open-sans-semi-bold",

    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.yellow600,
    borderWidth: 2,
    borderColor: Colors.yellow600,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
