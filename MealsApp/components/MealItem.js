import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function MealItem({ id, title, imageUrl, duration, complexity, affordablity }) {
  const navigation = useNavigation();

  function mealScreenHandler() {
    navigation.navigate("MealDetails", { mealId: id }); // mealId go to the meal details screen
  }
  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={mealScreenHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.textField}>{title}</Text>
          </View>

          <View style={styles.detailsMeal}>
            <Text style={styles.detailItem}>{duration}M</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordablity.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 16,
    borderRadius: 12,
    elevation: 2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    shadowOffset: { height: 2, width: 0 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  buttonPressed: {
    flex: 1,
    opacity: 0.25,
  },
  innerContainer: {
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    flex: 1,
  },
  textField: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 8,
  },
  detailsMeal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  detailItem: {
    paddingHorizontal: 12,
    fontWeight: "semibold",
    fontSize: 12,
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 8,
  },
  imageContainer: {
    alignItems: "center",
  },
});
