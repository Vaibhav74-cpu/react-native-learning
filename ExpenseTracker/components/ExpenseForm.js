import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import Button from "../components/Button";

function ExpenseForm({ onSubmit, onCancel, submitLabel, defaultValues }) {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
    description: defaultValues ? defaultValues.description.toString() : "",
  });

  function inputHandler(inputIdentifier, enteredValue) {
    setInputValues((currentValues) => {
      return {
        ...currentValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }
  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount, //convert into number
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    onSubmit(expenseData);
  }
  return (
    <View style={styles.form}>
      <Text style={styles.textField}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.input}
          label="Amount"
          inputPropertys={{
            keyboardType: "decimal-pad",
            value: inputValues.amount,
            onChangeText: inputHandler.bind(this, "amount"),
          }}
        />
        <Input
          style={styles.input}
          label="Date"
          inputPropertys={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: inputValues.date,
            onChangeText: inputHandler.bind(this, "date"),
          }}
        />
      </View>
      <Input
        label="Description"
        inputPropertys={{
          multiline: true,
          value: inputValues.description,
          onChangeText: inputHandler.bind(this, "description"),
        }}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 10,
    marginBottom: 14,
  },
  inputRow: {
    flexDirection: "row",
  },
  textField: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {},
});
