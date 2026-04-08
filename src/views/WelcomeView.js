import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function WelcomeView({ navigation }) {
  return (
    <View style={styles.container}>
      {/* 🐶 IMÁGENES ARRIBA */}
      <View style={styles.topContainer}>
        <Image source={require("../assets/bunny.png")} style={styles.topLeft} />
        <Image source={require("../assets/cat.png")} style={styles.topRight} />
      </View>

      {/* 🐾 IMÁGENES ABAJO */}
      <View style={styles.bottomContainer}>
        <Image
          source={require("../assets/huron.png")}
          style={styles.bottomLeft}
        />
        <Image
          source={require("../assets/whiteDog.png")}
          style={styles.bottomRight}
        />
      </View>

      {/* ⚪ CÍRCULO */}
      <View style={styles.circle}>
        <Text style={styles.wip}>WIP</Text>
      </View>

      {/* 🐾 FRANJA */}
      <View style={styles.band} />

      {/* 🐾 TÍTULO */}
      <Text style={styles.title}>PetAdopt</Text>

      {/* 🔘 BOTÓN */}
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
    top: 60,
    width: "100%",
  },

  topLeft: {
    position: "absolute",
    left: 10,
    width: 250,
    height: 500,
    resizeMode: "contain",
  },

  topRight: {
    position: "absolute",
    right: 0,
    width: 290,
    height: 450,
    resizeMode: "contain",
  },

  // 🔻 ABAJO
  bottomContainer: {
    position: "absolute",
    bottom: 300,
    width: "100%",
  },

  bottomLeft: {
    position: "absolute",
    left: 10,
    width: 200,
    height: 300,
    resizeMode: "contain",
  },

  bottomRight: {
    position: "absolute",
    right: 0,
    width: 300,
    height: 400,
    resizeMode: "contain",
  },

  // ⚪ CÍRCULO
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

  // ⚪ FRANJA
  band: {
    position: "absolute",
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    top: "45%",
  },

  // 🐾 TEXTO
  title: {
    position: "absolute",
    bottom: 180,
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
  },

  // 🔘 BOTÓN
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
