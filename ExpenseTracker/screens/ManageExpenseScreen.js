import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../util/IconButton";

import { ExpenseContext } from "../store/Expense-context";
import ExpenseForm from "../components/ExpenseForm";

function ManageExpenseScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const expenseCtx = useContext(ExpenseContext);
  const expenseEditedId = route.params?.expenseId;
  const isExpenseId = !!expenseEditedId; //conver into truty values

  const selectedExpense = expenseCtx.expenses.find(
    (expense) => expense.id === expenseEditedId,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: isExpenseId ? "Edit Expense" : "Add Expense",
    });
  }, [isExpenseId, navigation]);

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    if (isExpenseId) {
      expenseCtx.updateExpense(expenseEditedId, expenseData);
    } else {
      expenseCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

  function deleteHandler() {
    expenseCtx.deleteExpense(expenseEditedId); //call from context
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitLabel={isExpenseId ? "Update" : "Add"}
        defaultValues={selectedExpense}
      />

      {isExpenseId && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color="#7b0606"
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenseScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#29067b",
  },
  deleteContainer: {
    alignItems: "center",
    borderTopWidth: 4,
    borderTopColor: "#b19ae3",
    marginTop: 16,
    paddingTop: 8,
  },
});
