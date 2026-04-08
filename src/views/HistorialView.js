import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { PetsContext } from "../context/PetsContext";

export default function HistorialView() {
  const { likedPets, dislikedPets } = useContext(PetsContext);
  const [activeTab, setActiveTab] = useState("liked");

  const tabs = [
    { key: "liked", label: "❤️ Likes" },
    { key: "disliked", label: "❌ Dislikes" },
  ];

  const renderPetCard = (pet) => (
    <View style={styles.card}>
      {/* Puedes agregar imagen si tienes URL */}
      {pet.photo && (
        <Image source={{ uri: pet.photo }} style={styles.petImage} />
      )}
      <Text style={styles.petName}>{pet.name}</Text>
      {pet.age && <Text style={styles.petInfo}>Age: {pet.age}</Text>}
      {pet.species && (
        <Text style={styles.petInfo}>Species: {pet.species}</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Solicitudes</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tabButton,
              activeTab === tab.key && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab.key && styles.activeTabText,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista de mascotas */}
      <FlatList
        data={activeTab === "liked" ? likedPets : dislikedPets}
        keyExtractor={(item, index) => item._id || index.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            {activeTab === "liked"
              ? "No hay mascotas que te gustaron aún"
              : "No hay mascotas que no te gustaron aún"}
          </Text>
        }
        renderItem={({ item }) => renderPetCard(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2F6BFF",
    marginBottom: 20,
    textAlign: "center",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#ffffff33",
  },
  activeTabButton: {
    backgroundColor: "#2F6BFF",
  },
  tabText: {
    color: "#2F6BFF",
    fontWeight: "bold",
  },
  activeTabText: {
    color: "#ffffff",
  },
  card: {
    backgroundColor: "#2F6BFF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
    elevation: 3, // sombra Android
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10, // sombra iOS
  },
  petImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 10,
  },
  petName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  petInfo: {
    fontSize: 14,
    color: "#555",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    color: "#fff",
    fontStyle: "italic",
    fontSize: 16,
  },
});
