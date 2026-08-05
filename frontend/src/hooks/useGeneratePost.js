import { useState } from "react";
import api from "../services/api";

export default function useGeneratePost() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generatePost = async (data) => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await api.post("/generate", data);

      setResult(response.data.data);
    } catch (err) {
      console.error(err);

      const detail = err.response?.data?.detail;

if (Array.isArray(detail)) {
  setError(detail[0].msg);
} else {
  setError(detail || "Something went wrong.");
}
    } finally {
      setLoading(false);
    }
  };

  return {
    result,
    loading,
    error,
    generatePost,
  };
}