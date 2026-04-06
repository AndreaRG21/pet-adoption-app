import { useNavigation } from "@react-navigation/native";
import { pets } from "../data/pets";

export default function useHomeViewModel() {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return {
    pets,
    goToProfile,
    goToLogin,
    goToHome,
  };
}
