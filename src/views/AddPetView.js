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
  return (
    <View style={styles.container}>
      {/* 🔵 Header */}
      <Text style={styles.title}>Subir Mascota</Text>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* ⚪ Card */}
        <View style={styles.card}>
          {/* Nombre */}
          <Text style={styles.label}>Pet Name</Text>
          <TextInput style={styles.input} placeholder="Value" />

          {/* Foto */}
          <Text style={styles.labelCenter}>Photo</Text>
          <TouchableOpacity style={styles.imageBox}>
            <Ionicons name="cloud-upload-outline" size={30} color="#333" />
          </TouchableOpacity>

          {/* Edad */}
          <Text style={styles.label}>Age</Text>
          <TextInput style={styles.input} placeholder="Value" />

          {/* Especie */}
          <TouchableOpacity style={styles.select}>
            <View style={styles.selectLeft}>
              <Ionicons name="paw-outline" size={18} color="#C98A1A" />
              <Text style={styles.selectText}>Species</Text>
            </View>
            <Ionicons name="chevron-down" size={18} color="#555" />
          </TouchableOpacity>

          {/* Género */}
          <TouchableOpacity style={styles.select}>
            <View style={styles.selectLeft}>
              <Ionicons name="paw-outline" size={18} color="#C98A1A" />
              <Text style={styles.selectText}>Gender</Text>
            </View>
            <Ionicons name="chevron-down" size={18} color="#555" />
          </TouchableOpacity>

          {/* Descripción */}
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            multiline
          />

          {/* Extra */}
          <Text style={styles.label}>Extra</Text>
          <TextInput style={styles.input} placeholder="Value" />

          {/* Botón */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ADD PET</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F6BFF",
    alignItems: "center",
    paddingTop: 40,
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
    marginTop: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});