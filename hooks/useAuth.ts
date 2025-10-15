import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

export function useAuth() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const savedToken = await SecureStore.getItemAsync("access_token");
      setToken(savedToken);
      setLoading(false);
    })();
  }, []);

  const login = async (tokenValue: string) => {
    await SecureStore.setItemAsync("access_token", tokenValue);
    setToken(tokenValue);
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("access_token");
    setToken(null);
  };

  return { token, loading, login, logout };
}
