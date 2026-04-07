import {
  View,
  FlatList,
  TouchableOpacity,
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

      console.log("API RESPONSE:", res.data); 

      let data = [];

      if (Array.isArray(res.data)) {
        data = res.data;
      } else if (Array.isArray(res.data?.pets)) {
        data = res.data.pets;
      } else if (Array.isArray(res.data?.data)) {
        data = res.data.data;
      }

      setPets(data);

    } catch (error) {
      console.log("Error cargando mascotas:", error);
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

      <Text style={styles.sectionTitle}>Adopta tu compañero 💙</Text>

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
    </View>
  );
}