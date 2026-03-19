import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import TextInstruction from "../components/TextInstruction";

function StartGameScreen({ onPickNumber }) {
  const [enteredValue, setEnteredValue] = useState("");

  const inputHandler = (enteredNumber) => {
    setEnteredValue(enteredNumber);
  };

  const resetNumberHandler = () => {
    setEnteredValue("");
  };

  const confirmHandler = () => {
    5;
    const choosenNumber = parseInt(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber > 99 || choosenNumber <= 0) {
      Alert.alert("Invalid Number", "Number must be between 1 to 99", [
        { text: "Okay", style: "default", onPress: resetNumberHandler },
      ]);
      return;
    }

    onPickNumber(choosenNumber);
    // console.log("valid number");
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Gusee My Number</Title>
      <Card>
        <TextInstruction>Enter a Number</TextInstruction>
        <TextInput
          style={styles.textinput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredValue}
          onChangeText={inputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: Colors.primary700,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 35,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 5, //only works in android

    //below property only works in ios
    // shadowColor: "black",
    // shadowOpacity: 0.5,
    // shadowRadius: 6,
    // shadowOffset: { width: 0, height: 2 },
  },
  textinput: {
    color: Colors.yellow600,
    fontSize: 30,
    height: 55,
    width: 50,
    borderBottomWidth: 2,
    borderBottomColor: Colors.yellow600,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 6,
    // borderColor:"#c4c41b",
    // borderWidth:2
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
