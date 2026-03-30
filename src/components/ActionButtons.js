import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ActionButtons({ onLike, onDislike }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dislike} onPress={onDislike}>
        <Text style={styles.text}>❌</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.like} onPress={onLike}>
        <Text style={styles.text}>❤️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
  like: {
    backgroundColor: "#4CAF50",
    padding: 20,
    borderRadius: 50,
    marginHorizontal: 20,
  },
  dislike: {
    backgroundColor: "#F44336",
    padding: 20,
    borderRadius: 50,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
