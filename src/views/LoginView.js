import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuthViewModel } from "../viewmodels/useAuthViewModel";

export default function LoginView({ navigation }) {
  const { email, setEmail, password, setPassword, error, handleLogin } = useAuthViewModel();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PetAdopt 🐾</Text>
      
      <View style={styles.card}>
        <View style={styles.tabs}>
          <Text style={styles.activeTab}>login</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.inactiveTab}>sign up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputBox}>
          <TextInput 
            style={styles.input} 
            value={email} 
            onChangeText={setEmail} 
            placeholder="Value"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputBox}>
          <TextInput 
            style={styles.input} 
            value={password} 
            onChangeText={setPassword} 
            placeholder="Value"
            secureTextEntry={!showPassword}
          />
          <Ionicons 
            name={showPassword ? "eye-off" : "eye"} 
            size={20} 
            onPress={() => setShowPassword(!showPassword)} 
          />
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={() => handleLogin(navigation)}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
        
        <Text style={styles.forgotText}>Forgot password?</Text>
      </View>

      
      <Image 
        source={{ uri: 'https://tu-link-al-perro.png' }} 
        style={styles.dogImage} 
      />
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
    color: "#fff", // 🔥 corregido (antes decía ycolor)
    fontWeight: "bold",
    marginBottom: 40,
  },

  card: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 25,
    zIndex: 2,
    elevation: 5, // 🔥 sombra en Android
    shadowColor: "#000", // 🔥 sombra iOS
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
    borderRadius: 12, // 🔥 más moderno
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

  forgotText: {
    textAlign: "center",
    marginTop: 15,
    color: "#666",
    fontSize: 12,
  },

  dogImage: {
    width: 300,
    height: 200,
    position: "absolute",
    bottom: 0,
    right: -50,
    opacity: 0.9,
  },
});