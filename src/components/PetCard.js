import { View, Text, Image, StyleSheet } from "react-native";

export default function PetCard({ pet }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: pet.image }} style={styles.image} />
      <Text>{pet.name}</Text>
      <Text>{pet.breed}</Text>
      <Text>{pet.age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
});