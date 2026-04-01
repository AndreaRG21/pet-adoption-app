import { View, Text, Image, StyleSheet } from "react-native";

export default function PetDetailView({ route }) {
  const { pet } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: pet.image }} style={styles.image} />

      <Text style={styles.name}>{pet.name}</Text>
      <Text style={styles.info}>Raza: {pet.breed}</Text>
      <Text style={styles.info}>Edad: {pet.age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  image: {
    width: "30%",
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});