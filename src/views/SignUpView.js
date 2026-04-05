import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignUpView({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    alert("Cuenta creada 🚀");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* 🔵 Title */}
      <Text style={styles.logo}>PetAdopt 🐾</Text>

      {/* ⚪ Card */}
      <View style={styles.card}>
        {/* Tabs */}
        <View style={styles.tabs}>
          <Text
            style={styles.inactiveTab}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
          <Text style={styles.activeTab}>Sign Up</Text>
        </View>

        {/* EMAIL */}
        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={20} color="#2F6BFF" />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

       
        <View style={styles.inputBox}>
          <Ionicons name="lock-closed-outline" size={20} color="#2F6BFF" />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

          <View style={styles.inputBox}>
          <Ionicons name="lock-closed-outline" size={20} color="#2F6BFF" />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity
          onPress={() => alert("Reset password enviado 📩")}
        >
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F6BFF",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },

  card: {
    width: "88%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },

  activeTab: {
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderColor: "#2F6BFF",
    paddingBottom: 5,
    color: "#2F6BFF",
  },

  inactiveTab: {
    color: "#888",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: "#f9f9f9",
  },

  input: {
    flex: 1,
    padding: 12,
  },

  forgot: {
    textAlign: "right",
    color: "#2F6BFF",
    marginBottom: 15,
    fontSize: 12,
    fontWeight: "500",
  },

  button: {
    backgroundColor: "#FFA726",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});