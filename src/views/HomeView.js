import {
  View,
  FlatList,
  Text,
  StyleSheet,
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

        const data =
          res.data?.pets ||
          res.data?.data ||
          res.data ||
          [];

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
      <TopBar title="🐾 Catálogo" />

      <Text style={styles.sectionTitle}>
        Adopta tu compañero 💙
      </Text>

      <FlatList
        data={pets}
        numColumns={2}
        keyExtractor={(item, index) =>
          item._id || index.toString()
        }
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <PetCard pet={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F7FF",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
    marginTop: 15,
    marginLeft: 15,
  },

  list: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 80,
  },

  row: {
    justifyContent: "space-between",
  },
});