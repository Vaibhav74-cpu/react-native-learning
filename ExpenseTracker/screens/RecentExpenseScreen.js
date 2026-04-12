import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../store/Expense-context";
import { getRecentDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/LoadingOverlay";
import ErrorOverlay from "../components/ErrorOverlay";

function RecentExpenseScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  // const [fetchedExpenses, setFetchExpenses] = useState([]);
  const expenseCtx = useContext(ExpenseContext);

  useEffect(() => {
    async function getExpenses() {
      setIsLoading(true);
      try {
        const expenses = await fetchExpenses();
        expenseCtx.setExpenses(expenses);
      } catch (error) {
        setError("could not fetch expenses");
      }
      setIsLoading(false);
    }
    getExpenses();
  }, []);

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();

    const last7days = getRecentDays(today, 7);

    return expense.date > last7days; //last date is suppose 1 april and toady is 5 april 5 > 1 -> return item
  });

  if (error) {
    <ErrorOverlay message={error} />;
  }
  if (isLoading) {
    <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="last 7 days"
      fallbackText="No expense register for last 7 days"
    />
  );
}

export default RecentExpenseScreen;
