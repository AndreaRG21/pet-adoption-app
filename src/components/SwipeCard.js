import { View, Text, Image, StyleSheet } from "react-native";

export default function SwipeCard({ pet }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: pet.image }} style={styles.image} />

     
      <View style={styles.overlay}>
        <Text style={styles.name}>{pet.name}</Text>
        <Text style={styles.details}>
          {pet.breed} • {pet.age}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
  width: 270,
  height: 360,
  borderRadius: 20,
  overflow: "hidden",
},

  image: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  details: {
    color: "#ddd",
  },
});