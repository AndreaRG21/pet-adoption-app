import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function HistorialView({ route }) {
  const { likedPets = [], dislikedPets = [] } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial 🐾</Text>

      <ScrollView contentContainerStyle={styles.content}>
        
        <Text style={styles.section}>❤️ Likes</Text>
        {likedPets.length === 0 ? (
          <Text style={styles.empty}>No hay likes</Text>
        ) : (
          likedPets.map((pet, i) => (
            <View key={i} style={styles.petRow}>
              <Image source={{ uri: pet.image }} style={styles.image} />
              <Text style={styles.name}>{pet.name}</Text>
            </View>
          ))
        )}

        <Text style={styles.section}>❌ Dislikes</Text>
        {dislikedPets.length === 0 ? (
          <Text style={styles.empty}>No hay dislikes</Text>
        ) : (
          dislikedPets.map((pet, i) => (
            <View key={i} style={styles.petRow}>
              <Image source={{ uri: pet.image }} style={styles.image} />
              <Text style={styles.name}>{pet.name}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#2F6BFF",
  alignItems: "center",
  justifyContent: "space-between", 
  paddingTop: 80,
  paddingBottom: 40,
},

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  content: {
    padding: 20,
  },

  section: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },

  empty: {
    color: "#ddd",
    marginTop: 5,
  },

  petRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  name: {
    marginLeft: 10,
    fontWeight: "bold",
  },
});