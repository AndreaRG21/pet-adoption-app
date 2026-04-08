import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function TopBar() {
  return (
    <>
      <StatusBar backgroundColor="#2F6BFF" barStyle="light-content" />

      <View style={styles.container}>
        <Text style={styles.title}>PetAdopt 🐾</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: StatusBar.currentHeight + 10,
    paddingBottom: 15,
    alignItems: "center",
    backgroundColor: "#2F6BFF",

    shadowColor: "#2F6BFF",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#fff",
  },
});
