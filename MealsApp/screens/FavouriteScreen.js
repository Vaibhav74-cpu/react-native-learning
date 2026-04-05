import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FavouriteContext } from "../store/context/Favourite-context";
import { MEALS } from "../data/dummyData";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";

function FavouriteScreen() {
  const { favouriteMealsIds } = useSelector((state) => state.favouriteMeals);
  // const favouriteCxt = useContext(FavouriteContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsIds.includes(meal.id),
  ); //store meal id in favourite ids container

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.textField}>
          There is no favourite meals currently
        </Text>
      </View>
    );
  }

  function renderMealitem(itemData) {
    const item = itemData.item;
    return (
      <MealItem
        id={item.id}
        title={item.title}
        imageUrl={item?.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordablity={item.affordablity}
      />
    );
  }
  return (
    <FlatList
      data={favouriteMeals}
      renderItem={renderMealitem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  textField: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
