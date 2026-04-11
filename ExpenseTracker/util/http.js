import axios from "axios";

const BASE_URL = "https://expense-eeadc-default-rtdb.firebaseio.com";
export async function storeExpense(expenseData) {
  await axios.post(`${BASE_URL}/expenses.json`, expenseData);
}

export async function fetchExpenses() {
  const response = await axios.get(`${BASE_URL}/expenses.json`);
//   console.log(response.data);

  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    

    expenses.push(expenseObj);
  }
  return expenses;
}
