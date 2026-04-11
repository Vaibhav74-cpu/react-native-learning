import { StyleSheet, Text, TextInput, View } from "react-native";

function Input({ label, inputPropertys, style, inValid }) {
  let inputStyles = [styles.input];
  if (inputPropertys && inputPropertys.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  if (inValid) {
    inputStyles.push(styles.inValidText);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, inValid && styles.inValidLabel]}>
        {label}
      </Text>
      <TextInput {...inputPropertys} style={inputStyles} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 6,
    marginHorizontal: 8,
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#ffebc3",
    color: "#000000",
    borderRadius: 6,
    fontSize: 18,
    padding: 8,
    fontWeight: "700",
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  inValidLabel: {
    color: "#ff0000",
  },
  inValidText: {
    backgroundColor: "#f89af2",
  },
});

/*
inputProperty --> maxlength, keyborrd type
*/
