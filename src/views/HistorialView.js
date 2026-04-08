import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext } from "react";
import { PetsContext } from "../context/PetsContext";
import TopBar from "../components/TopBar";

export default function HistorialView() {
  const { likedPets, dislikedPets } = useContext(PetsContext);

  const renderItem = (item) => (
    <View style={styles.card}>
      <Text style={styles.petName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TopBar />

      <View style={styles.content}>
        <Text style={styles.title}>Historial</Text>

        {/* LIKES */}
        <Text style={styles.subtitle}>❤️ Likes</Text>
        {likedPets.length === 0 ? (
          <Text style={styles.empty}>No hay likes aún</Text>
        ) : (
          <FlatList
            data={likedPets}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => renderItem(item)}
            contentContainerStyle={styles.list}
          />
        )}

        {/* DISLIKES */}
        <Text style={styles.subtitle}>❌ Dislikes</Text>
        {dislikedPets.length === 0 ? (
          <Text style={styles.empty}>No hay dislikes aún</Text>
        ) : (
          <FlatList
            data={dislikedPets}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => renderItem(item)}
            contentContainerStyle={styles.list}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  content: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },

  list: {
    paddingBottom: 10,
  },

  card: {
    backgroundColor: "#2F6BFF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,

    // sombra iOS
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 20,

    // sombra Android
    elevation: 3,
  },

  petName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },

  empty: {
    color: "#E0E7FF",
    fontStyle: "italic",
    marginBottom: 10,
  },
});
