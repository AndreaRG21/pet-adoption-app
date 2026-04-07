import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { petAPI } from "../models/api";

export default function PetDetailView({ route }) {
  const { id } = route.params;
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const res = await petAPI.getPetById(id);
        setPet(res.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchPet();
  }, []);

  if (!pet) return <Text>Cargando...</Text>;

  return (
    <View>
      <Text>{pet.name}</Text>
      <Text>{pet.breed}</Text>
      <Text>{pet.age}</Text>
      <Text>{pet.description}</Text>
    </View>
  );
}