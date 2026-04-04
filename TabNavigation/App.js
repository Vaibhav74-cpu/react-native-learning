import "react-native-reanimated";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screen/HomeScreen";
import CartScreen from "./screen/CartScreen";
import UserScreen from "./screen/UserScreen";

const TopTab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TopTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#5e1414" },
          headerTintColor: "white",
          tabBarActiveBackgroundColor: "#f3eaeacc",
          tabBarActiveTintColor: "#7f0808",
        }}
      >
        <TopTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Home screen",

            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <TopTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <TopTab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="cart" size={size} color={color} />
            ),
          }}
        />
      </TopTab.Navigator>
    </NavigationContainer>
  );
}
