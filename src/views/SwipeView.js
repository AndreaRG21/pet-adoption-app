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
import { useContext } from "react";
import { PetsContext } from "../context/PetsContext";
import TopBar from "../components/TopBar";

export default function SwipeView({ navigation }) {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const { likedPets, setLikedPets, dislikedPets, setDislikedPets } =
    useContext(PetsContext);

  const position = useRef(new Animated.ValueXY()).current;

  const nextPet = () => {
    if (index < pets.length - 1) {
      setIndex((prev) => prev + 1);
      position.setValue({ x: 0, y: 0 });
    } else {
      setFinished(true);
    }
  };

  const handleLike = () => {
    setLikedPets((prev) => [...prev, pets[index]]);

    Animated.timing(position, {
      toValue: { x: 400, y: 0 },
      duration: 300,
      useNativeDriver: false,
    }).start(() => nextPet());
  };

  const handleDislike = () => {
    setDislikedPets((prev) => [...prev, pets[index]]);

    Animated.timing(position, {
      toValue: { x: -400, y: 0 },
      duration: 300,
      useNativeDriver: false,
    }).start(() => nextPet());
  };

  const animatedStyle = {
    transform: [{ translateX: position.x }],
  };

  const resetSwipe = () => {
    setIndex(0);
    setFinished(false);
    setLikedPets([]);
    setDislikedPets([]);
    position.setValue({ x: 0, y: 0 });
  };

  return (
    <View style={styles.container}>
      <TopBar />

      <View style={styles.content}>
        <View style={styles.centerArea}>
          {!finished ? (
            <>
              {pets[index] && (
                <Animated.View style={[styles.cardContainer, animatedStyle]}>
                  <SwipeCard pet={pets[index]} />
                </Animated.View>
              )}
            </>
          ) : (
            <View style={styles.endContainer}>
              <Text style={styles.endText}>No hay más mascotas 🐶</Text>
            </View>
          )}
        </View>

        {!finished && (
          <View style={styles.buttons}>
            <ActionButtons onLike={handleLike} onDislike={handleDislike} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  content: {
    flex: 1,
  },

  centerArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttons: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    width: "100%",
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

  btn: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 5,
    marginTop: 20,
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
