import React from "react";
import { StyleSheet, Text, View } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.listItemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#b6917b",
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    paddingVertical: 4,
    paddingHorizontal: 14,
  },
  listItemText: {
    color: "#29190f",
    textAlign: "center",
    fontWeight: "700",
  },
});
