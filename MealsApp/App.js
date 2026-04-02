// *********************************** module : navigation- stack, drawer, tabs *********************************************

import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

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
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
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
