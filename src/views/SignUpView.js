import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRegister } from "../hooks/useRegister";

export default function SignUpView({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { registerUser, loading, error } = useRegister();

  const handleRegister = async () => {
    const result = await registerUser(fullName, email, password);
    if (result) {
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PetAdopt 🐾</Text>

      <View style={styles.card}>
        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.inactiveTab}>login</Text>
          </TouchableOpacity>
          <Text style={styles.activeTab}>sign up</Text>
        </View>

        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter your name"
          />
        </View>

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Min 8 characters"
            secureTextEntry={!showPassword}
          />
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>

        {/* Error */}
        {error && <Text style={styles.errorText}>{error}</Text>}

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Registering..." : "SIGN UP"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F6BFF",
    alignItems: "center",
    paddingTop: 80,
  },

  logo: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 40,
  },

  card: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 25,
    zIndex: 2,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    marginBottom: 25,
  },

  activeTab: {
    color: "#2F6BFF",
    fontWeight: "bold",
    fontSize: 18,
    borderBottomWidth: 2,
    borderColor: "#2F6BFF",
    paddingBottom: 5,
  },

  inactiveTab: {
    color: "#999",
    fontSize: 18,
  },

  label: {
    color: "#333",
    marginBottom: 5,
    fontWeight: "600",
  },

  inputBox: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    padding: 12,
  },

  button: {
    backgroundColor: "#F5A623",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },

  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center",
  },
});
