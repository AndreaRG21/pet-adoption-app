import React, { useState, useRef, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
} from "react-native";

import SwipeCard from "../components/SwipeCard";
import ActionButtons from "../components/ActionButtons";
import TopBar from "../components/TopBar";
import { PetsContext } from "../context/PetsContext";
import { petAPI } from "../models/api";

export default function SwipeView({ navigation }) {
  const [pets, setPets] = useState([]);
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const { likedPets, setLikedPets, dislikedPets, setDislikedPets } =
    useContext(PetsContext);

  const position = useRef(new Animated.ValueXY()).current;

  // 🔥 CARGAR MASCOTAS DESDE API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await petAPI.getAllPets();
        console.log("SWIPE API:", res.data);
        const data = res.data?.pets || res.data?.data || res.data || [];
        setPets(data);
      } catch (error) {
        console.log("Error cargando mascotas:", error);
      }
    };
    fetchPets();
  }, []);

  const nextPet = () => {
    if (index < pets.length - 1) {
      setIndex((prev) => prev + 1);
      position.setValue({ x: 0, y: 0 });
    } else {
      setFinished(true);
    }
  };

  const handleLike = () => {
    if (!pets[index]) return;
    setLikedPets((prev) => [...prev, pets[index]]);
    Animated.timing(position, {
      toValue: { x: 400, y: 0 },
      duration: 300,
      useNativeDriver: false,
    }).start(() => nextPet());
  };

  const handleDislike = () => {
    if (!pets[index]) return;

    // Guardar la mascota actual
    const currentPet = pets[index];
    setDislikedPets((prev) => [...prev, currentPet]);

    Animated.timing(position, {
      toValue: { x: -400, y: 0 },
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      if (index < pets.length - 1) {
        nextPet();
      } else {
        setFinished(true);
      }
    });
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

  // 🔥 LOADING
  if (!pets.length) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff" }}>Cargando mascotas...</Text>
      </View>
    );
  }

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

              <TouchableOpacity
                style={styles.btn}
                onPress={() =>
                  navigation.navigate("Main", {
                    screen: "Solicitudes",
                  })
                }
              >
                <Text style={styles.btnText}>Ver Solicitudes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.btn, { marginTop: 10 }]}
                onPress={resetSwipe}
              >
                <Text style={styles.btnText}>Reiniciar Swipe</Text>
              </TouchableOpacity>
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
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  cardContainer: {
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#fff",
    padding: 12,
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
    color: "#1F2937",
    fontSize: 18,
    marginBottom: 20,
  },
});
