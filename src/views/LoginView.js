import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginView({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    if (cleanEmail === "admin@test.com" && cleanPassword === "12345678") {
      setError("");
      navigation.navigate("Main", { screen: "Swipe" });
    } else {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Text style={styles.logo}>🐾 PetAdopt</Text>
      <Text style={styles.subtitle}>Find your best friend</Text>

      {/* CARD */}
      <View style={styles.card}>
        {/* TABS */}
        <View style={styles.tabs}>
          <Text style={styles.activeTab}>Login</Text>

          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.inactiveTab}>Sign Up</Text>
          </Pressable>
        </View>

        {/* EMAIL */}
        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={20} color="#888" />
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
        </View>

        {/* PASSWORD */}
        <View style={styles.inputBox}>
          <Ionicons name="lock-closed-outline" size={20} color="#888" />

          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={styles.input}
            onChangeText={setPassword}
            value={password}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        {/* ERROR */}
        {error !== "" && <Text style={styles.error}>{error}</Text>}

        {/* BUTTON */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>

        {/* FORGOT */}
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgot}>Forgot password?</Text>
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },

  subtitle: {
    color: "#E6E6E6",
    marginBottom: 20,
  },

  card: {
    width: "88%",
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 22,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },

  activeTab: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2F6BFF",
    borderBottomWidth: 2,
    borderColor: "#2F6BFF",
    paddingBottom: 5,
  },

  inactiveTab: {
    fontSize: 16,
    color: "#999",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: "#FAFAFA",
  },

  input: {
    flex: 1,
    padding: 12,
  },

  button: {
    backgroundColor: "#FFA726",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },

  forgot: {
    textAlign: "center",
    marginTop: 12,
    color: "#2F6BFF",
    fontWeight: "500",
  },

  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
});