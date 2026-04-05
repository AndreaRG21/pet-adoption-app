import {View,StyleSheet, Animated,Text,TouchableOpacity,} from "react-native";
import { useRef, useState } from "react";
import { pets } from "../data/pets";
import SwipeCard from "../components/SwipeCard";
import ActionButtons from "../components/ActionButtons";
import FloatingButton from "../components/FloatingButton";
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
      {/* 🔵 TÍTULO */}
      <Text style={styles.title}>PetAdopt 🐾</Text>

      {!finished ? (
        <>
          {/* 🐶 CARD */}
          {pets[index] && (
            <Animated.View style={[styles.cardContainer, animatedStyle]}>
              <SwipeCard pet={pets[index]} />
            </Animated.View>
          )}

          {/* ❤️ BOTONES */}
          <View style={styles.buttons}>
            <ActionButtons
              onLike={handleLike}
              onDislike={handleDislike}
            />
          </View>

          {/* 📜 BOTÓN HISTORIAL */}
          <View style={styles.historyButtonContainer}>
            <TouchableOpacity
              style={styles.historyButton}
              onPress={() =>
                navigation.navigate("Historial", {
                  likedPets,
                  dislikedPets,
                })
              }
            >
              <Text style={styles.historyText}>📜 Ver historial</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.endContainer}>
          <Text style={styles.endText}>No hay más mascotas 🐶</Text>

          {/* BOTÓN FINAL */}
          <TouchableOpacity
            style={styles.historyButton}
            onPress={() =>
              navigation.navigate("Historial", {
                likedPets,
                dislikedPets,
              })
            }
          >
            <Text style={styles.historyText}>Ver historial</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
<FloatingButton
  title="Catálogo"
  onPress={() => navigation.navigate("Home")}
/>
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


  historyButtonContainer: {
  marginTop: 10,
},
  historyButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 5,
  },

  historyText: {
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