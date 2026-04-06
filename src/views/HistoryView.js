import { View, Text, FlatList, Image, StyleSheet } from "react-native";

export default function HistoryView({ route }) {
  const { likedPets, dislikedPets } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>❤️ Likes</Text>

      <FlatList
        data={likedPets}
        keyExtractor={(item) => item.id.toString()}
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
  container: 
  { flex: 1, 
    padding: 20 
},
  title: { fontSize: 20, marginVertical: 10 },
  card: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  image: { width: 50, height: 50, borderRadius: 10, marginRight: 10 },
});
