import { StyleSheet, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, expensesPeriod }) {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      description: "Groceries",
      amount: 250,
      date: new Date(2023, 11, 26), // Note: month is 0-indexed (11 = December)
    },
    {
      id: "e2",
      description: "Electricity Bill",
      amount: 120,
      date: new Date(2024, 0, 15), // January 15, 2024
    },
    {
      id: "e3",
      description: "Internet Subscription",
      amount: 80,
      date: new Date(2024, 0, 20),
    },
    {
      id: "e4",
      description: "Dinner at Restaurant",
      amount: 65,
      date: new Date(2024, 1, 5), // February 5, 2024
    },
    {
      id: "e5",
      description: "Movie Tickets",
      amount: 30,
      date: new Date(2024, 1, 10),
    },
    {
      id: "e6",
      description: "Gym Membership",
      amount: 150,
      date: new Date(2024, 1, 18),
    },
    
  ];

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#29067b",
    padding: 24,
  },
});
