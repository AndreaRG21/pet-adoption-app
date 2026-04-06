import {
  View,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
} from "react-native";
import { useRef, useState } from "react";
import { pets } from "../data/pets";
import SwipeCard from "../components/SwipeCard";
import ActionButtons from "../components/ActionButtons";

export default function SwipeView({ navigation }) {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const [likedPets, setLikedPets] = useState([]);
  const [dislikedPets, setDislikedPets] = useState([]);

  const position = useRef(new Animated.ValueXY()).current;

  const nextPet = () => {
    if (index < pets.length - 1) {
      setIndex(index + 1);
      position.setValue({ x: 0, y: 0 });
    } else {
      setFinished(true);
    }
  };

  const handleLike = () => {
    setLikedPets([...likedPets, pets[index]]);

    Animated.timing(position, {
      toValue: { x: 400, y: 0 },
      duration: 300,
      useNativeDriver: false,
    }).start(nextPet);
  };

  const handleDislike = () => {
    setDislikedPets([...dislikedPets, pets[index]]);

    Animated.timing(position, {
      toValue: { x: -400, y: 0 },
      duration: 300,
      useNativeDriver: false,
    }).start(nextPet);
  };

  const animatedStyle = {
    transform: [{ translateX: position.x }],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PetAdopt 🐾</Text>

      {!finished ? (
        <>
          {pets[index] && (
            <Animated.View style={[styles.cardContainer, animatedStyle]}>
              <SwipeCard pet={pets[index]} />
            </Animated.View>
          )}

          <View style={styles.buttons}>
            <ActionButtons
              onLike={handleLike}
              onDislike={handleDislike}
            />
          </View>

        
            
              
        </>
      ) : (
        <View style={styles.endContainer}>
          <Text style={styles.endText}>
            No hay más mascotas 🐶
          </Text>

          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.navigate("Main", {
                screen: "Solicitudes",
                params: { likedPets },
              })
            }
          >
            <Text style={styles.btnText}>Ver Solicitudes</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F6BFF",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    position: "absolute",
    top: 60,
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  cardContainer: {
    alignItems: "center",
  },

  buttons: {
    marginTop: 20,
  },

  navButtons: {
    flexDirection: "row",
    marginTop: 20,
  },

  btn: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 5,
  },

  btnText: {
    color: "#2F6BFF",
    fontWeight: "bold",
  },

  endContainer: {
    alignItems: "center",
  },

  endText: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
  },
});