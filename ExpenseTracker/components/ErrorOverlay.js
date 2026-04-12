import React from "react";
import { StyleSheet, Text, View } from "react-native";

function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>An Error Occured</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#2b106c",
  },
  label: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
