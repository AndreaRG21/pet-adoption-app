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

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.btnText}>🚪 Log out</Text>
        </TouchableOpacity>
      </View>

      {/* 🔥 TITLE */}
      <Text style={styles.sectionTitle}>Adopta tu compañero 💙</Text>

      {/* 🔥 GRID */}
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
    justifyContent: "space-between",
  },

  addBtn: {
    flex: 1,
    backgroundColor: "#22c5bd",
    padding: 12,
    borderRadius: 15,
    marginRight: 6,
    alignItems: "center",
  },

  logoutBtn: {
    flex: 1,
    backgroundColor: "#1F2937",
    padding: 12,
    borderRadius: 15,
    marginLeft: 6,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
    marginTop: 15,
    marginLeft: 15,
  },

  list: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 80,
  },

  row: {
    justifyContent: "space-between",
  },
});