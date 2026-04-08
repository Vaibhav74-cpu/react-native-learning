import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({ children, mode, onPress }) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flat]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5515e9",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flat: { backgroundColor: "transparent" },
  pressed: {
    opacity: 0.5,
  },
});
