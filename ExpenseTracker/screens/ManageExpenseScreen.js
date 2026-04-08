import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../util/IconButton";
import Button from "../components/Button";
import { ExpenseContext } from "../store/Expense-context";

function ManageExpenseScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const expenseCtx = useContext(ExpenseContext);
  const expenseEditedId = route.params?.expenseId;
  const isExpenseId = !!expenseEditedId; //conver into truty values

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: isExpenseId ? "Edit Expense" : "Add Expense",
    });
  }, [isExpenseId, navigation]);

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isExpenseId) {
      expenseCtx.updateExpense(expenseEditedId, {
        description: "demo",
        amount: 150,
        date: new Date("2026-04-07"),
      });
    } else {
      expenseCtx.addExpense({
        description: "test",
        amount: 500,
        date: new Date("2026-11-20"),
      });
    }
    navigation.goBack();
  }

  function deleteHandler() {
    expenseCtx.deleteExpense(expenseEditedId);
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isExpenseId ? "Update" : "Add"}
        </Button>
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 6,
    minWidth: 60,
  },
});
