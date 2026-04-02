// import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummyData";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
  //   const route = useRoute();  //good approach
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categorysId.includes(catId); //here we check the meal belongs to multiple categories. eg c2 belongs to four category
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  function renderMealitem(itemData) {
    const item = itemData.item;
    return (
      <MealItem
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
      data={displayedMeals}
      renderItem={renderMealitem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/*
To show scren title dynamically-> comapre the prevoius screen id with current scrren id and then extract title using find method
*/
