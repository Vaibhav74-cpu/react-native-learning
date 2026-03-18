import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
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
    }
    // console.log("valid number");
  };
  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#110c38",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
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
    color: "#ddb52f",
    fontSize: 30,
    height: 55,
    width: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#c4c41b",
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
