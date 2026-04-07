import { FlatList, Text, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpensesHandler(itemdata) {
  const item = itemdata.item;
  return (
    <ExpenseItem
      id={item.id}
      description={item.description}
      amount={item.amount}
      date={item.date}
    />
  );
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesHandler}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
