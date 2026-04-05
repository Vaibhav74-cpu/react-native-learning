import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummyData";
import List from "../components/List";
import { useContext, useEffect } from "react";
import SubTitle from "../components/SubTitle";
import IconButton from "../components/IconButton";
// import { FavouriteContext } from "../store/context/Favourite-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourite";

function MealDetailsScreen({ route }) {
  //   const route = useRoute();
  // const favouriteCxtIds = useContext(FavouriteContext);
  const dispatch = useDispatch();
  const { favouriteMealsIds } = useSelector((state) => state.favouriteMeals);
  const navigation = useNavigation();
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFav = favouriteMealsIds.includes(mealId); //check the coming mealid is present on ids array

  function FavouritesHandler() {
    if (mealIsFav) {
      // favouriteCxtIds.removeFavourite(mealId);
      dispatch(removeFavourite({ id: mealId }));
    } else {
      // favouriteCxtIds.addFavourite(mealId);
      dispatch(addFavourite({ id: mealId }));
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={FavouritesHandler}
            size={24}
            color="white"
            icon={mealIsFav ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [FavouritesHandler, navigation]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.textField}>{selectedMeal.title}</Text>

      <View style={styles.detailsMeal}>
        <Text style={styles.detailItem}>{selectedMeal.duration}M</Text>
        <Text style={styles.detailItem}>
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {selectedMeal.affordablity.toUpperCase()}
        </Text>
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />

          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
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
    color: "#d4a4a4d1",
  },
  textField: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 8,
    color: "white",
  },

  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
