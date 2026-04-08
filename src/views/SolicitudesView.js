import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { PetsContext } from "../context/PetsContext";

export default function SolicitudesView() {
  const { likedPets, dislikedPets } = useContext(PetsContext);
  const [activeTab, setActiveTab] = useState("liked");

  const tabs = [
    { key: "liked", label: "Mascotas que te gustaron" },
    { key: "disliked", label: "Mascotas que no te gustaron" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Solicitudes ❤️</Text>

      {/* 🔘 Tabs simples */}
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <Text
            key={tab.key}
            style={[styles.tab, activeTab === tab.key && styles.activeTab]}
            onPress={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </Text>
        ))}
      </View>

      {/* 🐶 Lista según tab activo */}
      <FlatList
        data={activeTab === "liked" ? likedPets : dislikedPets}
        keyExtractor={(item, index) => item._id || index.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F3F7FF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  tab: {
    fontWeight: "bold",
    color: "#777",
  },
  activeTab: {
    color: "#2F6BFF",
    textDecorationLine: "underline",
  },
  list: {
    paddingBottom: 100,
  },
  item: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 10,
  },
});
