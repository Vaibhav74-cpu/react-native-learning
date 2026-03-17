import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({ children }) {
  const handlePress = () => {
    console.log("pressed");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={handlePress}
        android_ripple={{ color: "#1c125b" }}
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
    backgroundColor: "#3d385e",
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
