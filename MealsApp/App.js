// *********************************** module : navigation- stack, drawer, tabs *********************************************
import "react-native-reanimated";
import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouriteScreen from "./screens/FavouriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#371010" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#372f2f" },
        drawerItemStyle: { borderRadius: 5 },
        drawerActiveBackgroundColor: "#b19b1e",
        drawerActiveTintColor: "#beb0b0",
        drawerInactiveTintColor: "white",
        drawerContentStyle: { backgroundColor: "#371010" },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerTitle: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#371010" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#372f2f" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ navigation, route }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,  // BAD APPROACH FOR SHOWING SCREEN NAME
            //   };
            // }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title="Tap Me" onPress={pressHandler} />;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

/*
"@react-navigation/native" -- > provides NavigationContainer component that manages the navigation state
"@react-navigation/native-stack" -- >  stack navigator that allows us to push/pop screens 

React Navigation internally wraps your component and injects two special props:
navigation –> provide automatically by react naviagtion for screen component by default
route –> it eliminate the need of passing props from child component , it contains the current information, must be descendent of navigator

useNavigation hook --> this hook navigate the component that are not register as screen, but also the component descendent of NavigationContainer
*/
