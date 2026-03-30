import { View, Text, Button } from "react-native";

export default function LoginView({ navigation }) {
  return (
    <View>
      <Text>Bienvenido a la plataforma!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
