import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import TopBar from "../components/TopBar";
import { petAPI } from "../models/api";

export default function HomeView({ navigation }) {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await petAPI.getAllPets();
        console.log("API:", res.data);
        const data = res.data?.pets || res.data?.data || res.data || [];
        setPets(data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Cargando mascotas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TopBar />

      {/* TITULOS */}
      <View style={styles.textContainer}>
        <Text style={styles.sectionTitle}>Adopta tu compañero 💙</Text>
        <Text style={styles.subtitle}>Encuentra tu match ideal 🐶</Text>
      </View>

      {/* LISTA DE MASCOTAS */}
      <FlatList
        data={pets}
        numColumns={2}
        keyExtractor={(item, index) => item._id || index.toString()}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <PetCard pet={item} navigation={navigation} />
        )}
      />

      {/* BOTÓN FLOTANTE */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("AddPet")}
      >
        <Text style={styles.fabText}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFF",
  },

  textContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1F2937",
  },

  subtitle: {
    marginTop: 5,
    color: "#6B7280",
    fontSize: 14,
  },

  list: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 120, // espacio para botón flotante
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },

  // FAB (Floating Action Button)
  fab: {
    position: "absolute",
    bottom: 25,
    alignSelf: "center",
    backgroundColor: "#2F6BFF",
    width: 65,
    height: 65,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#2F6BFF",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },

  fabText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
