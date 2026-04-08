<<<<<<< HEAD
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import TopBar from "../components/TopBar";
import { pets } from "../data/pets";

export default function SolicitudesView() {
  const [activeTab, setActiveTab] = useState("proceso");

  return (
    <View style={styles.container}>
      <TopBar />

      <View style={styles.content}>
        <Text style={styles.title}>Mis Solicitudes</Text>

        {/* 🔘 TABS */}
        <View style={styles.tabs}>
          <TouchableOpacity onPress={() => setActiveTab("proceso")}>
            <Text
              style={[styles.tab, activeTab === "proceso" && styles.activeTab]}
            >
              En Proceso
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab("adoptados")}>
            <Text
              style={[
                styles.tab,
                activeTab === "adoptados" && styles.activeTab,
              ]}
            >
              Adoptados
            </Text>
          </TouchableOpacity>
        </View>

        {/* 🐶 LISTA */}
        <FlatList
          data={pets}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />

              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>

                {activeTab === "proceso" ? (
                  <>
                    <Text style={styles.pending}>Solicitud en revisión</Text>

                    <View style={styles.progressBar}>
                      <View style={styles.progressFill} />
                    </View>
                  </>
                ) : (
                  <>
                    <Text style={styles.approved}>APROBADO!</Text>
                    <Text style={styles.contact}>Contáctanos</Text>
                  </>
                )}
              </View>
            </View>
          )}
        />
      </View>
=======
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function SolicitudesView({ route }) {
  const { likedPets = [], dislikedPets = [] } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitudes ❤️</Text>

      <Text style={styles.subtitle}>Mascotas que te gustaron:</Text>

      <FlatList
        data={likedPets}
        keyExtractor={(item, index) => item._id || index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

      <Text style={styles.subtitle}>No te gustaron:</Text>

      <FlatList
        data={dislikedPets}
        keyExtractor={(item, index) => item._id || index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
>>>>>>> 30425a0af6f631f3d9242a8cc8f45c29da810b63
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F3F7FF",
  },
<<<<<<< HEAD
  content: {
    flex: 1,
    padding: 20,
  },

=======
>>>>>>> 30425a0af6f631f3d9242a8cc8f45c29da810b63
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    marginTop: 15,
    fontWeight: "bold",
  },
  item: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 10,
  },
});
