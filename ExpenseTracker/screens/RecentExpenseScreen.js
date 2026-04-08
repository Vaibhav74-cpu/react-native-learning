import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/Expense-context";
import { getRecentDays } from "../util/date";

function RecentExpenseScreen() {
  const expenseCtx = useContext(ExpenseContext);

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();

    const last7days = getRecentDays(today, 7);

    return expense.date > last7days; //last date is suppose 1 april and toady is 5 april 5 > 1 -> return item
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="last 7 days"
      fallbackText="No expense register for last 7 days"
    />
  );
}

export default RecentExpenseScreen;
