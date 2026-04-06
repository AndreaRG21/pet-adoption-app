import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { pets } from "../data/pets";

export default function SolicitudesView() {
  const [activeTab, setActiveTab] = useState("proceso");

  return (
    <View style={styles.container}>
      {/* 🔵 HEADER */}
      <Text style={styles.title}>Mis Solicitudes</Text>

      {/* 🔘 TABS */}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setActiveTab("proceso")}>
          <Text
            style={[
              styles.tab,
              activeTab === "proceso" && styles.activeTab,
            ]}
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
                  <Text style={styles.pending}>
                    Solicitud en revisión
                  </Text>

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
  );
}

// 🔥 ESTILOS (ESTO TE FALTABA)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F6BFF",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 50,
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    marginTop: 20,
    paddingVertical: 10,
  },

  tab: {
    fontSize: 16,
    color: "#888",
  },

  activeTab: {
    color: "#000",
    fontWeight: "bold",
    borderBottomWidth: 3,
    borderColor: "#FFA726",
  },

  list: {
    padding: 15,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  pending: {
    color: "#4F8EF7",
    marginTop: 5,
  },

  progressBar: {
    height: 6,
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginTop: 5,
    overflow: "hidden",
  },

  progressFill: {
    width: "60%",
    height: "100%",
    backgroundColor: "#4F8EF7",
  },

  approved: {
    color: "green",
    fontWeight: "bold",
    marginTop: 5,
  },

  contact: {
    color: "#555",
  },
});