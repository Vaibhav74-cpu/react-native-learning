import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function IconButton({ onPress, icon, size, color }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;
