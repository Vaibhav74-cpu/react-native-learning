import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  function goalAddHandler() {
    // setCourseGoals({ ...courseGoals, enteredGoal });
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
  }
  return (
    <View style={styles.appConatainer}>
      {/* <View>
        <Text>welcome to home screen</Text>
      </View>
      <Text
        style={{ margin: 16, borderColor: "red", borderWidth: 1, padding: 6 }} //inline css styling
      >
        wecome to india
      </Text>
      <Text style={styles.japanText}>welcome to japan</Text>
      <Button title="tap me" /> */}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goals"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={goalAddHandler} />
      </View>
      <View style={styles.goalShow}>
        {courseGoals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>

      {/* flexbox */}
      {/* <View
        style={{
          backgroundColor: "red",
          // height: 100,
          // width: 100,
          justifyContent: "center",
          alignItems: "center",
          flex:1
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          // height: 100,
          // width: 100,
          flex:2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          // height: 100,
          // width: 100,
          flex:3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  //stylesheet object
  appConatainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  // appConatainer: {
  //   padding: 50,
  //   width: "80%",
  //   height: 300,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 80,
    width: 80,
  },
  textInput1: {
    borderColor: "red",
    borderWidth: 2,
    height: 50,
    width: 50,
    textAlign: "center",
  },
  textInput2: {
    borderColor: "blue",
    borderWidth: 2,
    height: 50,
    width: 50,
    textAlign: "center",
  },
  textInput3: {
    borderColor: "green",
    borderWidth: 2,
    height: 50,
    width: 50,
    textAlign: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBlockColor: "black  ",
    borderBottomWidth: 2,
    marginBottom: 2,
  },
  textInput: {
    width: "70%",
    borderWidth: 2,
    borderColor: "#cb5252cc",
    marginRight: 8,
    padding: 8,
  },
  goalShow: {
    flex: 6,
    marginTop: 20,
  },
});
