import { View, FlatList } from "react-native";
import { pets } from "../data/pets";
import PetCard from "../components/PetCard";
import TopBar from "../components/TopBar";

export default function HomeView() {
  return (
    <View>
      <TopBar title="Catálogo" />
      <FlatList
        numColumns={2}
        data={pets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PetCard pet={item} />}
      />
    </View>
  );
}
