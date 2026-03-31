import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileView() {
  const user = {
    name: "Andrea",
    email: "andrea@email.com",
    image:
      "https://th.bing.com/th/id/OIP.NHjcr1WQVs8OyUrNzBaCAQHaIN?w=169&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.avatar} />

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Informacion Personal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Notificaciones</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Seguridad</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acerca de</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: "#E74C3C" }]}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: { fontSize: 22, fontWeight: "bold" },
  email: { fontSize: 16, color: "gray", marginBottom: 20 },
  button: {
    backgroundColor: "#3498DB",
    padding: 12,
    borderRadius: 10,
    width: "70%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff" },
});
