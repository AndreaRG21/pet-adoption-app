import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { pets } from "../data/pets";
import PetCard from "../components/PetCard";
import TopBar from "../components/TopBar";
import FloatingButton from "../components/FloatingButton";

export default function HomeView({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <TopBar title="Catálogo" />

      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text>Ir a Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Log Out</Text>
      </TouchableOpacity>

      <FlatList
        numColumns={2}
        data={pets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PetCard pet={item} />}
      />
      <FloatingButton
        title="Catálogo"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
