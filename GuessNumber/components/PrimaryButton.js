import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#cbff20" }}
      >
        <Text style={styles.button}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    borderRadius: 20,
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 6,
  },
  button: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
