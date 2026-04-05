import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileView() {
  const user = {
    name: "Andrea",
    email: "andrea@email.com",
    image:
      "https://th.bing.com/th/id/OIP.NHjcr1WQVs8OyUrNzBaCAQHaIN?w=169&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  };

  // 🔥 componente opción premium
  const Option = ({ title, icon }) => {
    const scale = new Animated.Value(1);

    const handlePressIn = () => {
      Animated.spring(scale, {
        toValue: 0.95,
        useNativeDriver: true,
      }).start();
    };

    const handlePressOut = () => {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    };

    return (
      <Animated.View style={{ transform: [{ scale }] }}>
        <TouchableOpacity
          style={styles.option}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <View style={styles.optionLeft}>
            <Ionicons name={icon} size={20} color="#2F6BFF" />
            <Text style={styles.optionText}>{title}</Text>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>


      {/* 👤 Avatar editable */}
      <TouchableOpacity activeOpacity={0.8}>
        <Image source={{ uri: user.image }} style={styles.avatar} />

        {/* icono editar */}
        <View style={styles.editIcon}>
          <Ionicons name="camera" size={14} color="#fff" />
        </View>
      </TouchableOpacity>

      {/* Info */}
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      {/* ⚪ Card */}
      <View style={styles.card}>
        <Option title="Editar perfil" icon="person-outline" />
        <Option title="Información personal" icon="document-text-outline" />
       
        <Option title="Seguridad" icon="lock-closed-outline" />
        <Option title="Acerca de" icon="information-circle-outline" />
      </View>

      {/* 🔴 Logout */}
      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={18} color="#fff" />
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F6BFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    position: "absolute",
    top: 50,
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },

  avatar: {
    width: 95,
    height: 95,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },

  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#2F6BFF",
    padding: 6,
    borderRadius: 20,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 8,
  },

  email: {
    color: "#ddd",
    marginBottom: 15,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingVertical: 5,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },

  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },

  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  optionText: {
    fontSize: 14,
    color: "#333",
  },

  logoutButton: {
    flexDirection: "row",
    gap: 8,
    marginTop: 15,
    backgroundColor: "#E74C3C",
    padding: 12,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
});