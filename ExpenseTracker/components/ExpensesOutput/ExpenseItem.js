import { Pressable, View, Text, StyleSheet } from "react-native";
import { gatFomattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ id, amount, description, date }) {
  const navigation = useNavigation();
  function expenseHandler() {
    navigation.navigate("ManageExpenses", { expenseId: id });
  }
  return (
    <Pressable
      onPress={expenseHandler}
      style={({ pressed }) => pressed && styles.pressedButton}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textField, styles.description]}>
            {description}
          </Text>
          <Text style={[styles.textField]}>{gatFomattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#5d23e4",
    marginVertical: 4,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  pressedButton: { opacity: 0.75 },
  textField: {
    color: "#1a1428",
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amountContainer: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    minWidth: 50,
  },
  amount: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#2b106c",
    textAlign: "center",
  },
});
