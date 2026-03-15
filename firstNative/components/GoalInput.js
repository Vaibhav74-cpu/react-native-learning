import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    props.addGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.inputContainer}>
        <Image source={require("../assets/images/images.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goals"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHandler}
              color="#ae3232cc"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#ae3232cc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    borderBlockColor: "black  ",
    borderBottomWidth: 2,
    marginBottom: 2,
    padding: 16,
    // backgroundColor: "#311b6b",
  },
  textInput: {
    width: "100%",
    borderWidth: 2,
    // color: "white",
    borderColor: "#ae3232cc",
    marginTop: 14,
    // padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
    gap: 10,
  },
  button: {
    width: 100,
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
});
