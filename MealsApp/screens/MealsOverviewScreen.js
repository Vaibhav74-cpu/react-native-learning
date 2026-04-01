import { StyleSheet, Text, View } from "react-native";

function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>This is meals overview screen</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
