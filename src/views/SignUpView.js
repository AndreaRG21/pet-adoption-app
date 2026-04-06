import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useRegister } from "../hooks/useRegister";

export default function SignUpView({ navigation }) {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

 const { registerUser, loading, error } = useRegister();

const handleRegister = async () => {
  const result = await registerUser(full_name, email, password);

  if (result) {
    navigation.navigate("Login");
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full_Name</Text>
      <TextInput style={styles.input} onChangeText={setFullName} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} onChangeText={setEmail} />

      <Text style={styles.label}>Password*</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Min 8 characters"
          secureTextEntry={!showPassword}
        />
      </View>

      {/* BOTÓN */}
      <TouchableOpacity
        style={styles.btn}
        onPress={handleRegister}
        disabled={loading}
      >
        <Text style={styles.btnText}>
          {loading ? "Registering..." : "Sign Up"}
        </Text>
      </TouchableOpacity>

      {/* ERROR */}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F7FF",
    justifyContent: "center",
    padding: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#1F2937",
  },

  inputBox: {
    marginBottom: 15,
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
});