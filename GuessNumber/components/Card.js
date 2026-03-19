import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary700,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 35,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 5, //only works in android

    //below property only works in ios
    // shadowColor: "black",
    // shadowOpacity: 0.5,
    // shadowRadius: 6,
    // shadowOffset: { width: 0, height: 2 },
  },
});
