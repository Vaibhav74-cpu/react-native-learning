import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

function WelcomeScreen() {
  const navigation = useNavigation();
  function drawerHandler() {
    navigation.toggleDrawer();
  }
  return (
    <View>
      <Text>We are in welcome screen</Text>
      <Button title="drawer" onPress={drawerHandler} />
    </View>
  );
}

export default WelcomeScreen;
