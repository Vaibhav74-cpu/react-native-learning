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
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
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
navigation –> contains methods to navigate, go back, etc.
route –> contains the parameters passed to the screen.

useNavigation hook --> this hook navigate the component that are not register as screen, but also the component descendent of NavigationContainer
*/
