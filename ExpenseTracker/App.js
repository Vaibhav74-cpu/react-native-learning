import "react-native-reanimated";
import "react-native-gesture-handler";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { StatusBar } from "expo-status-bar";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import RecentExpenseScreen from "./screens/RecentExpenseScreen";
import IconButton from "./util/IconButton";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <BottomTab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "#3b09b1" },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "#3b09b1" },
        tabBarActiveTintColor: "#ffdb64",
        tabBarActiveBackgroundColor: "#3a0ea2",
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => navigation.navigate("ManageExpenses")}
          />
        ),
      })}
    >
      <BottomTab.Screen
        name="RecentExpensess"
        component={RecentExpenseScreen}
        options={{
          headerTitle: "Recent Expenses",
          tabBarLabel: "Recent",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          headerTitle: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#3b09b1" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpenseOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ManageExpenses"
            component={ManageExpenseScreen}
            options={{ headerTitle: "Manage Expense", presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
