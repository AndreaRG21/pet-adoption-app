// src/viewmodels/useAuthViewModel.js
import { useState } from 'react';
import * as Keychain from 'react-native-keychain';

export const useAuthViewModel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // GUARDAR TOKEN (Login/Registro)
  const saveSecureToken = async (token) => {
    try {
      // Guardamos el token usando el email como 'username' para identificarlo
      await Keychain.setGenericPassword(email, token, {
        service: 'petadopt_auth_token', // Identificador único para tu app
      });
    } catch (err) {
      console.error("Error guardando en Keychain:", err);
    }
  };

  // RECUPERAR TOKEN (Para persistencia de sesión)
  const getSecureToken = async () => {
    try {
      const credentials = await Keychain.getGenericPassword({
        service: 'petadopt_auth_token',
      });
      if (credentials) {
        return credentials.password; // Aquí está tu JWT
      }
      return null;
    } catch (err) {
      console.error("Error leyendo de Keychain:", err);
      return null;
    }
  };

  const handleLogin = async (navigation) => {
    // ... validaciones de Regex previas ...

    // Mock de Login exitoso para Sprint 1
    if (email === "admin@test.com" && password === "12345678") {
      const mockJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."; // Simulación de token
      
      await saveSecureToken(mockJWT); // REQUERIMIENTO SPRINT 1: Seguridad activa
      setError("");
      navigation.navigate("Main");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return {
    email, setEmail,
    password, setPassword,
    error, handleLogin,
    getSecureToken 
  };
};