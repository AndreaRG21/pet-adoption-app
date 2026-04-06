import { useState } from "react";
import api from "../models/api";

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const registerUser = async (full_name, email, password) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
        console.log("Registering user:", { full_name, email, password });
      const response = await api.post("/api/user/register", {
        full_name,
        email,
        password,
      });

      setSuccess(true);
      return response.data;

    } catch (err) {
      console.log("Register error:", err?.response?.data || err.message);

      setError(
        err?.response?.data?.message ||
        "Error al registrar usuario"
      );

      return null;

    } finally {
      setLoading(false);
    }
  };

  return {
    registerUser,
    loading,
    error,
    success,
  };
}