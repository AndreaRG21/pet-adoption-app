import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import { pets } from "../data/pets";
import PetCard from "../components/PetCard";
import TopBar from "../components/TopBar";

export default function HomeView({ navigation }) {
  return (
    <View style={styles.container}>
      <TopBar title="🐾 Catálogo" />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate("AddPet")}
        >
          <Text style={styles.btnText}>+ Add Pet</Text>
        </TouchableOpacity>
      </View>

      {/* TITULO */}
      <Text style={styles.sectionTitle}>Adopta tu compañero 💙</Text>

      {/* LISTA */}
      <FlatList
        data={pets}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PetCard pet={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F7FF",
  },

  header: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginTop: 10,
    gap: 10,
  },

  addBtn: {
    flex: 1,
    backgroundColor: "#22c5bd",
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  logoutBtn: {
    flex: 1,
    backgroundColor: "#1F2937",
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F2937",
    marginTop: 15,
    marginLeft: 15,
  },

  list: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 90,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
