import { useNavigation} from "@react-navigation/native";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  // const navigation = useNavigation();
 
  return (
    <View style={[styles.outerContainer]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.buttonText,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
        // onPress={() => navigation.navigate("MealsOverview")}  // good approach for navigation
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.textField}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 18,
    elevation: 4,
    borderRadius: 10,
    borderWidth: 2,
    height: 150,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    shadowOffset: { height: 2, width: 0 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  buttonText: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
