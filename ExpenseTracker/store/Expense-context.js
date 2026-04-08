import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Groceries",
    amount: 250,
    date: new Date(2026, 3, 7), // Note: month is 0-indexed (11 = December)
  },
  {
    id: "e2",
    description: "Electricity Bill",
    amount: 120,
    date: new Date(2024, 3, 4), // January 15, 2024
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

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  updateExpense: (id, { description, amount, date }) => {},
  deleteExpense: (id) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "Add":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state]; //add (data+id) + keep old data
    case "Update":
      const updateExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id, //find which expens need to update
      );
      const updatableExpense = state[updateExpenseIndex]; // state[1]
      const updateditem = { ...updatableExpense, ...action.payload.data }; //replece the new data(coming from payload) with old data
      const updatedExpense = [...state];
      updatedExpense[updateExpenseIndex] = updateditem;
      return updatedExpense;
    case "Delete":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "Add", payload: expenseData });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "Update", payload: { id: id, data: expenseData } });
  }
  function deleteExpense(id) {
    dispatch({ type: "Delete", payload: id });
  }

  const value = {
    expenses: expenseState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
