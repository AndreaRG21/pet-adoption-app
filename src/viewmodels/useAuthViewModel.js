import { useState } from "react";
import { userAPI } from "../models/api";
import StorageService from "../helpers/StorageService";

export function useAuthViewModel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (navigation) => {
    setError("");

    try {
      const response = await userAPI.login({
        email,
        password,
      });

      const { token, user } = response.data;

     
      await StorageService.saveToken(token);

      console.log("Login exitoso:", user);

      navigation.replace("Home");

    } catch (err) {
      console.log("Login error:", err);

      if (err.response?.status === 401) {
        setError("Credenciales incorrectas");
      } else if (err.response?.status === 404) {
        setError("Usuario no encontrado");
      } else {
        setError("Error de conexión, intenta de nuevo");
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin,
  };
}