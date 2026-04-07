import { View, Text, StyleSheet, FlatList } from "react-native";

export default function SolicitudesView({ route }) {
  const { likedPets = [], dislikedPets = [] } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitudes ❤️</Text>

      <Text style={styles.subtitle}>Mascotas que te gustaron:</Text>

      <FlatList
        data={likedPets}
        keyExtractor={(item, index) => item._id || index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

      <Text style={styles.subtitle}>No te gustaron:</Text>

      <FlatList
        data={dislikedPets}
        keyExtractor={(item, index) => item._id || index.toString()}
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
    padding: 20,
    backgroundColor: "#F3F7FF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    marginTop: 15,
    fontWeight: "bold",
  },
  item: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 10,
  },
});