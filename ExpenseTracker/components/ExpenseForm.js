import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import Button from "../components/Button";

function ExpenseForm({ onSubmit, onCancel, submitLabel, defaultValues }) {
  const [inputValues, setInputValues] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  function inputHandler(inputIdentifier, enteredValue) {
    setInputValues((currentValues) => {
      return {
        ...currentValues,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }
  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount.value, //convert into number
      date: new Date(inputValues.date.value),
      description: inputValues.description.value,
    };

    const amountIsValid = expenseData.amount > 0 && !isNaN(expenseData.amount);
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert("Invalid Input", "check the values before submitting");
      setInputValues((currValue) => {
        return {
          amount: { value: currValue.amount.value, isValid: amountIsValid },
          date: { value: currValue.date.value, isValid: dateIsValid },
          description: {
            value: currValue.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const formInValid =
    !inputValues.amount.value ||
    !inputValues.date.value ||
    !inputValues.description.value;

  return (
    <View style={styles.form}>
      <Text style={styles.textField}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.input}
          label="Amount"
          inputPropertys={{
            keyboardType: "decimal-pad",
            value: inputValues.amount.value,
            onChangeText: inputHandler.bind(this, "amount"),
          }}
          inValid={!inputValues.amount.value}
        />
        <Input
          style={styles.input}
          label="Date"
          inputPropertys={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: inputValues.date.value,
            onChangeText: inputHandler.bind(this, "date"),
          }}
          inValid={!inputValues.date.value}
        />
      </View>
      <Input
        label="Description"
        inputPropertys={{
          multiline: true,
          value: inputValues.description.value,
          onChangeText: inputHandler.bind(this, "description"),
        }}
        inValid={!inputValues.description.value}
      />
      {formInValid && (
        <Text style={styles.errorText}>
          Invalid Input Values: Check before submitting
        </Text>
      )}
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
  errorText: {
    color: "#ff0000",
    fontSize: 14,
    margin: 6,
    textAlign: "center",
  },
  button: {},
});
