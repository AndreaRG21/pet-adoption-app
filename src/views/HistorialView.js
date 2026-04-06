import { View, Text, StyleSheet, FlatList } from "react-native";

export default function HistorialView({ route }) {
  const { likedPets = [], dislikedPets = [] } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial</Text>

      <Text style={styles.subtitle}>❤️ Likes</Text>
      <FlatList
        data={likedPets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

      <Text style={styles.subtitle}>❌ Dislikes</Text>
      <FlatList
        data={dislikedPets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F6BFF",
    padding: 20,
  },

  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    color: "#fff",
    marginTop: 10,
    fontWeight: "bold",
  },

  item: {
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
  },
});