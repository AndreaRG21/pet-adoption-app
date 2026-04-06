import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddPetView() {

  const formFields = [
    { id: "name", label: "Pet Name", type: "input" },
    { id: "photo", label: "Photo", type: "image" },
    { id: "age", label: "Age", type: "input" },
    { id: "species", label: "Species", type: "select" },
    { id: "gender", label: "Gender", type: "select" },
    { id: "description", label: "Description", type: "textarea" },
    { id: "extra", label: "Extra", type: "input" },
  ];

  const renderItem = ({ item }) => {
    switch (item.type) {
      case "input":
        return (
          <View>
            <Text style={styles.label}>{item.label}</Text>
            <TextInput style={styles.input} placeholder="Value" />
          </View>
        );

      case "textarea":
        return (
          <View>
            <Text style={styles.label}>{item.label}</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              multiline
            />
          </View>
        );

      case "image":
        return (
          <View>
            <Text style={styles.labelCenter}>{item.label}</Text>
            <TouchableOpacity style={styles.imageBox}>
              <Ionicons name="cloud-upload-outline" size={30} color="#333" />
            </TouchableOpacity>
          </View>
        );

      case "select":
        return (
          <TouchableOpacity style={styles.select}>
            <View style={styles.selectLeft}>
              <Ionicons name="paw-outline" size={18} color="#C98A1A" />
              <Text style={styles.selectText}>{item.label}</Text>
            </View>
            <Ionicons name="chevron-down" size={18} color="#555" />
          </TouchableOpacity>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* 🔵 HEADER */}
      <Text style={styles.title}>Subir Mascota</Text>

      {/* 🔥 FORM CON FLATLIST */}
      <FlatList
        data={formFields}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.card}
        ListFooterComponent={
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ADD PET</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

// 🎨 ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F6BFF",
    paddingTop: 40,
    alignItems: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },

  card: {
    width: "90%",
    backgroundColor: "#f2f2f2",
    borderRadius: 15,
    padding: 15,
    borderWidth: 2,
    borderColor: "#2F6BFF",
    alignSelf: "center",
  },

  label: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 10,
  },

  labelCenter: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E0A84E",
    marginTop: 5,
  },

  textArea: {
    height: 80,
    textAlignVertical: "top",
  },

  imageBox: {
    width: 100,
    height: 100,
    backgroundColor: "#ddd",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    marginTop: 5,
  },

  select: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#E0A84E",
    marginTop: 10,
  },

  selectLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  selectText: {
    color: "#333",
  },

  button: {
    backgroundColor: "#C98A1A",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});