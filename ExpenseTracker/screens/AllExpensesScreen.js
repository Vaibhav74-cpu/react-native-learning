import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/Expense-context";

function AllExpensesScreen() {
  const expenseCtx = useContext(ExpenseContext);
  return (
    <ExpensesOutput
      expenses={expenseCtx.expenses}
      expensesPeriod="Total"
      fallbackText="Yod did not add expenses yet"
    />
  );
}

export default AllExpensesScreen;
