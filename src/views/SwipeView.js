import { View, StyleSheet, Animated } from "react-native";
import { useRef, useState } from "react";
import { pets } from "../data/pets";
import SwipeCard from "../components/SwipeCard";
import ActionButtons from "../components/ActionButtons";
import { Text, TouchableOpacity } from "react-native";
import FloatingButton from "../components/FloatingButton";
import TopBar from "../components/TopBar";

export default function SwipeView({ navigation }) {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
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
    Animated.timing(position, {
      toValue: { x: 500, y: 0 },
      duration: 300,
      useNativeDriver: false,
    }).start(nextPet);
  };

  const handleDislike = () => {
    Animated.timing(position, {
      toValue: { x: -500, y: 0 },
      duration: 300,
      useNativeDriver: false,
    }).start(nextPet);
  };

  const animatedStyle = {
    transform: [{ translateX: position.x }, { translateY: position.y }],
  };

  const [likedPets, setLikedPets] = useState([]);
  const [dislikedPets, setDislikedPets] = useState([]);

  return (
    <View style={styles.container}>
      <TopBar title="Descubre Mascotas 🐶" />
      {!finished ? (
        <>
          {pets[index] && (
            <Animated.View style={animatedStyle}>
              <SwipeCard pet={pets[index]} />
            </Animated.View>
          )}

          <ActionButtons onLike={handleLike} onDislike={handleDislike} />
        </>
      ) : (
        <View style={styles.endContainer}>
          <Text style={styles.endText}>No hay más mascotas 🐶</Text>
        </View>
      )}

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
    justifyContent: "center",
    alignItems: "center",
  },
  endContainer: {
    alignItems: "center",
  },

  endText: {
    fontSize: 20,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
