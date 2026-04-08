import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { petAPI } from "../models/api";

export default function PetDetailView({ route, navigation }) {
  const { id } = route.params;
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const res = await petAPI.getPetById(id.trim());
        setPet(res.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchPet();
  }, []);

  if (!pet) {
    return (
      <View style={styles.loading}>
        <Text style={{ color: "#2F6BFF" }}>Cargando mascota...</Text>
      </View>
    );
  }

  const imageUrl = pet.image?.[0] || "https://placedog.net/500";
  console.log(imageUrl);
  //const testImg = "data:image/jpeg;base64,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";

  const handleAdopt = () => {
    navigation.navigate("Solicitudes", {
      petId: pet.id,
      petName: pet.name,
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* IMAGEN */}
      <Image source={{ uri: imageUrl }} style={styles.image} />

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.name}>{pet.name}</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{pet.status}</Text>
        </View>

        {/* TABLA PROFESIONAL */}
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.cellLabel}>Especie</Text>
            <Text style={styles.cellValue}>{pet.species}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Raza</Text>
            <Text style={styles.cellValue}>{pet.breed}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Edad</Text>
            <Text style={styles.cellValue}>{pet.age}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Tamaño</Text>
            <Text style={styles.cellValue}>{pet.size}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Género</Text>
            <Text style={styles.cellValue}>{pet.gender}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Salud</Text>
            <Text style={styles.cellValue}>{pet.healthStatus}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cellLabel}>Discapacidad</Text>
            <Text style={styles.cellValue}>{pet.disabilities}</Text>
          </View>
        </View>

        {/* DESCRIPCIÓN */}
        <Text style={styles.section}>Descripción</Text>
        <Text style={styles.description}>{pet.description}</Text>

        {/* REQUISITOS */}
        <Text style={styles.section}>Requisitos</Text>
        {pet.requirements?.map((req, index) => (
          <Text key={index} style={styles.requirement}>
            • {req}
          </Text>
        ))}

        {/* BOTÓN ADOPTAR */}
        <TouchableOpacity style={styles.button} onPress={handleAdopt}>
          <Text style={styles.buttonText}>🐾 Adoptar ahora</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF2FF",
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EAF2FF",
  },

  image: {
    width: "100%",
    height: 280,
  },

  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E3A8A",
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#2F6BFF",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginTop: 6,
    marginBottom: 10,
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  /* TABLA */
  table: {
    marginTop: 15,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#D6E6FF",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#F5F9FF",
    borderBottomWidth: 1,
    borderBottomColor: "#D6E6FF",
  },

  cellLabel: {
    fontSize: 13,
    color: "#2F6BFF",
    fontWeight: "600",
  },

  cellValue: {
    fontSize: 13,
    color: "#1E1E1E",
    fontWeight: "500",
  },

  section: {
    marginTop: 18,
    fontWeight: "bold",
    fontSize: 16,
    color: "#1E3A8A",
  },

  description: {
    marginTop: 6,
    color: "#555",
    lineHeight: 18,
  },

  requirement: {
    marginTop: 5,
    color: "#2F6BFF",
  },

  button: {
    marginTop: 25,
    backgroundColor: "#2F6BFF",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
