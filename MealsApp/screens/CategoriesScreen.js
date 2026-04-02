import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoriesItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id }); //send categoryId value to meals overview screen
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
        // onPress={() => navigation.navigate("MealsOverview")}  //ANOTHER WAY
        // navigation={navigation}   //navgation send as prop to another component. this is very bad approach
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoriesItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
