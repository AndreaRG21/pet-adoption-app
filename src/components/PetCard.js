import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function PetCard({ pet, navigation }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("PetDetail", { pet })}
      activeOpacity={0.8}
    >
      {/* 🖼 Imagen */}
      <Image source={{ uri: pet.image }} style={styles.image} />

      {/* 📄 Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{pet.name}</Text>
        <Text style={styles.breed}>{pet.breed}</Text>
        <Text style={styles.age}>{pet.age}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",

    // 🔥 sombra pro
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },

  image: {
    width: "100%",
    height: 140,
  },

  infoContainer: {
    padding: 10,
    alignItems: "center",
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  breed: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
  },

  age: {
    fontSize: 12,
    color: "#2F6BFF", // 🔵 azul de tu app
    marginTop: 2,
    fontWeight: "600",
  },
});