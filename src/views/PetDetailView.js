import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function PetDetailView({ route, navigation }) {
  const { pet } = route.params;

  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>Detalle 🐾</Text>

  
      <View style={styles.card}>
        <Image source={{ uri: pet.image }} style={styles.image} />

        <Text style={styles.name}>{pet.name}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Raza</Text>
          <Text style={styles.value}>{pet.breed}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Edad</Text>
          <Text style={styles.value}>{pet.age}</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adoptar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F6BFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    position: "absolute",
    top: 60,
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  card: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },

  image: {
    width: "90%",
    height: 220,
    borderRadius: 15,
    marginBottom: 15,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  infoBox: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
  },

  label: {
    fontSize: 12,
    color: "#888",
  },

  value: {
    fontSize: 16,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#FFA726",
    padding: 14,
    borderRadius: 10,
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});