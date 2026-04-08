import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddPetView() {
  const [showSpecies, setShowSpecies] = useState(false);
  const [showGender, setShowGender] = useState(false);

  const [values, setValues] = useState({
    name: "",
    age: "",
    species: "",
    gender: "",
    description: "",
  });

  const speciesOptions = ["Dog", "Cat", "Bird", "Rabbit", "Other"];
  const genderOptions = ["Male", "Female"];

  const handleChange = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const handleSubmit = () => {
    console.log("Mascota:", values);
    alert("Mascota agregada (simulado)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PetAdopt 🐾</Text>

      <View style={styles.card}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Name */}
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter pet name"
            value={values.name}
            onChangeText={(text) => handleChange("name", text)}
          />

          {/* Age */}
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter pet age"
            value={values.age}
            onChangeText={(text) => handleChange("age", text)}
            keyboardType="numeric"
          />

          {/* Species */}
          <Text style={styles.label}>Species</Text>
          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => setShowSpecies(!showSpecies)}
          >
            <Text style={styles.inputText}>
              {values.species || "Select species"}
            </Text>
            <Ionicons
              name={showSpecies ? "chevron-up" : "chevron-down"}
              size={20}
              color="#555"
            />
          </TouchableOpacity>
          {showSpecies &&
            speciesOptions.map((opt) => (
              <TouchableOpacity
                key={opt}
                style={styles.option}
                onPress={() => {
                  handleChange("species", opt);
                  setShowSpecies(false);
                }}
              >
                <Text>{opt}</Text>
              </TouchableOpacity>
            ))}

          {/* Gender */}
          <Text style={styles.label}>Gender</Text>
          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => setShowGender(!showGender)}
          >
            <Text style={styles.inputText}>
              {values.gender || "Select gender"}
            </Text>
            <Ionicons
              name={showGender ? "chevron-up" : "chevron-down"}
              size={20}
              color="#555"
            />
          </TouchableOpacity>
          {showGender &&
            genderOptions.map((opt) => (
              <TouchableOpacity
                key={opt}
                style={styles.option}
                onPress={() => {
                  handleChange("gender", opt);
                  setShowGender(false);
                }}
              >
                <Text>{opt}</Text>
              </TouchableOpacity>
            ))}

          {/* Description */}
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, { height: 80, textAlignVertical: "top" }]}
            placeholder="Add description"
            multiline
            value={values.description}
            onChangeText={(text) => handleChange("description", text)}
          />

          {/* Botón */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>ADD PET</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F6BFF",
    alignItems: "center",
    paddingTop: 60,
  },

  logo: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 30,
  },

  card: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    maxHeight: "80%",
  },

  label: {
    color: "#333",
    fontWeight: "600",
    marginBottom: 5,
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#F9F9F9",
  },

  inputBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#F9F9F9",
  },

  inputText: {
    color: "#333",
  },

  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    backgroundColor: "#FFF",
  },

  button: {
    backgroundColor: "#F5A623",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
