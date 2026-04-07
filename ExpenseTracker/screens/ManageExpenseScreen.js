import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../util/IconButton";

function ManageExpenseScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const expenseEditedId = route.params?.expenseId;
  const isExpenseId = !!expenseEditedId; //conver into truty values

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: isExpenseId ? "Edit Expense" : "Add Expense",
    });
  }, [isExpenseId, navigation]);
  return (
    <View style={styles.container}>
      {isExpenseId && (
        <View style={styles.deleteContainer}>
          <IconButton icon="trash" size={36} color="#7b0606" />
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
