import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    `https://expense-eeadc-default-rtdb.firebaseio.com/expenses.json`,
    expenseData,
  );
}
