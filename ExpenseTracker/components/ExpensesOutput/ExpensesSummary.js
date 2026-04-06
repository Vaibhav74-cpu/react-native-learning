import { StyleSheet, Text, View } from "react-native";

function ExpensesSummary({ periodName, expenses }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sumField}>{expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#ffebc3",
    padding: 8,
  },
  period: {
    fontSize: 14,
    color: "#381687",
    fontWeight:'700'
  },
  sumField: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#29067b",
  },
});
