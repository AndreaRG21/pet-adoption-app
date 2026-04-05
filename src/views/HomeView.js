import { View, FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";
import { pets } from "../data/pets";
import PetCard from "../components/PetCard";
import TopBar from "../components/TopBar";
import FloatingButton from "../components/FloatingButton";

export default function HomeView({ navigation }) {
  return (
    <View style={styles.container}>
      <TopBar title="Catálogo" />

      {/* 🔐 BOTONES */}
      <View style={styles.buttonsContainer}>
        
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>

      </View>

      {/* 🐶 CATÁLOGO */}
      <FlatList
  numColumns={6}
  data={pets}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <PetCard pet={item} navigation={navigation} />
  )}
/>
<TouchableOpacity onPress={() => navigation.navigate("AddPet")}>
  <Text>Register new pets</Text>
</TouchableOpacity>

      <FloatingButton
        title="Catálogo"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  profileButton: {
    backgroundColor: "#FF914D",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 5,
    alignItems: "center",
  },

  logoutButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginLeft: 5,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
});