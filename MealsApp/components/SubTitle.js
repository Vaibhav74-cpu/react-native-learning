import React from "react";
import { StyleSheet, Text, View } from "react-native";

function SubTitle({ children }) {
  return (
    <View style={styles.subtiltContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
  subtiltContainer: {
    borderBottomColor: "#b6917b",
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 12,
  },
  subtitle: {
    textAlign: "center",
    color: "#b6917b",
    fontWeight: "bold",
    fontSize: 18,
    padding: 6,
  },
});
