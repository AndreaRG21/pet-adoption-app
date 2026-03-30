import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function WelcomeView({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a la plataforma!</Text>

      <Image
        source={{ uri: "https://placedog.net/400" }}
        style={styles.image}
      />

      <Button title="Continuar" onPress={() => navigation.navigate("Swipe")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
