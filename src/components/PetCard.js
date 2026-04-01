import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function PetCard({ pet, navigation }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("PetDetail", { pet })}
    >
      <Image source={{ uri: pet.image }} style={styles.image} />

      <Text style={styles.name}>{pet.name}</Text>
      <Text style={styles.info}>{pet.breed}</Text>
      <Text style={styles.info}>{pet.age}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 3,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  },

  image: {
    width: "90%",
    height: 170,
    borderRadius: 8,
    resizeMode: "cover",
  },

  name: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "center",
  },

  info: {
    fontSize: 9,
    color: "#555",
    textAlign: "center",
  },
});