import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
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

      <View>
        <TextInput placeholder="Enter your goals" />
        <Button title="Add goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //stylesheet object
  appConatainer: {
    padding: 50,
    margin: 1,
  },
});
