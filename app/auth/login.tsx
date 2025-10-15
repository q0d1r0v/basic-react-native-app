import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async () => {
    const fakeToken = "token_123";
    await login(fakeToken);
    router.replace("/main");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Login Page</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
