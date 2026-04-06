import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function WelcomeView({ navigation }) {
  return (
    <View style={styles.container}>
      {/*  MASCOTAS ARRIBA */}
      <View style={styles.topContainer}>
        <Image
          source={{ uri: "https://placedog.net/410" }}
          style={styles.topLeft}
        />
        <Image
          source={{ uri: "https://placedog.net/411" }}
          style={styles.topRight}
        />
      </View>

      {/*  CÍRCULO CENTRAL */}
      <View style={styles.circle}>
        <Text style={styles.wip}>WIP</Text>
      </View>

      {/* 🐾 FRANJA DECORATIVA */}
      <View style={styles.band} />

      {/* 🐾 TÍTULO */}
      <Text style={styles.title}>PetAdopt</Text>

      {/*  MASCOTAS ABAJO */}
      <View style={styles.bottomContainer}>
        <Image
          source={{ uri: "https://placedog.net/412" }}
          style={styles.bottomPet}
        />
        <Image
          source={{ uri: "https://placedog.net/413" }}
          style={styles.bottomPet}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Main", { screen: "Swipe" })}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
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

  // 🔝 ARRIBA
  topContainer: {
    position: "absolute",
    top: 70,
    width: "100%",
  },

  topLeft: {
    position: "absolute",
    left: 20,
    width: 130,
    height: 130,
    borderRadius: 25,
  },

  topRight: {
    position: "absolute",
    right: 20,
    width: 130,
    height: 130,
    borderRadius: 25,
  },

  //  CÍRCULO
  circle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#D89B2D",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },

  wip: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  //  FRANJA
  band: {
    position: "absolute",
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    top: "45%",
  },

  //  TEXTO
  title: {
    position: "absolute",
    bottom: 180,
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
  },

  //  ABAJO
  bottomContainer: {
    position: "absolute",
    bottom: 100,
    flexDirection: "row",
    gap: 20,
  },

  bottomPet: {
    width: 110,
    height: 110,
    borderRadius: 25,
  },

  //  BOTÓN
  button: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 5,
  },

  buttonText: {
    color: "#2F6BFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
