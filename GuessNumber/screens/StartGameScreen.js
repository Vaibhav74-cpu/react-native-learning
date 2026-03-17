import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textinput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#231b59",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 20,
    borderRadius: 6,
    elevation: 5, //only works in android

    //below property only works in ios
    // shadowColor: "black",
    // shadowOpacity: 0.5,
    // shadowRadius: 6,
    // shadowOffset: { width: 0, height: 2 },
  },
  textinput: {
    color: "#cccc00",
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
});
