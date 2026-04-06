import { FlatList, Text, View } from "react-native";

function renderExpensesHandler(itemdata) {
  return <Text>{itemdata.item.description}</Text>
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
