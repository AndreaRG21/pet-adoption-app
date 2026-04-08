import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { PetsContext } from "../context/PetsContext";

export default function MisAdopcionesView() {
  const { inProcessPets, adoptedPets } = useContext(PetsContext); // nuevo contexto
  const [activeTab, setActiveTab] = useState("inProcess");

  const tabs = [
    { key: "inProcess", label: "En Proceso" },
    { key: "adopted", label: "Adoptadas" },
  ];

  const renderPetCard = (pet) => (
    <View style={styles.card}>
      {pet.photo && (
        <Image source={{ uri: pet.photo }} style={styles.petImage} />
      )}
      <Text style={styles.petName}>{pet.name}</Text>
      {pet.species && (
        <Text style={styles.petInfo}>Especie: {pet.species}</Text>
      )}
      {pet.requestDate && activeTab === "inProcess" && (
        <Text style={styles.petInfo}>Solicitud: {pet.requestDate}</Text>
      )}
      {pet.adoptionDate && activeTab === "adopted" && (
        <Text style={styles.petInfo}>Adoptada: {pet.adoptionDate}</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Mascotas</Text>

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

      <FlatList
        data={activeTab === "inProcess" ? inProcessPets : adoptedPets}
        keyExtractor={(item, index) => item._id || index.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            {activeTab === "inProcess"
              ? "No tienes solicitudes en proceso"
              : "No has adoptado mascotas aún"}
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
    backgroundColor: "#2F6BFF",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
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
    backgroundColor: "#fff",
  },
  tabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  activeTabText: {
    color: "#2F6BFF",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
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
