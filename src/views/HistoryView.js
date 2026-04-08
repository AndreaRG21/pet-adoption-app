import { View, Text, FlatList, Image, StyleSheet } from "react-native";

export default function HistoryView({ route }) {
  const likedPets = route.params?.likedPets || [];
  const dislikedPets = route.params?.dislikedPets || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>❤️ Likes</Text>

      <FlatList
        data={likedPets}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>No hay likes</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.name}</Text>
          </View>
        )}
      />

      <Text style={styles.title}>❌ Dislikes</Text>

      <FlatList
        data={dislikedPets}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>No hay dislikes</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
});
