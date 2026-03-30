import { View, Text, Image, StyleSheet } from "react-native";

export default function SwipeCard({ pet }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: pet.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{pet.name}</Text>
        <Text>{pet.breed}</Text>
        <Text>{pet.age}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 400,
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",

    // 🔥 sombra (Android + iOS)
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  image: {
    width: "100%",
    height: "70%",
  },
  info: {
    padding: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
