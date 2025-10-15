import { Href, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";

export default function MainPage() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace("/auth/login" as Href);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Welcome to the Main Page ✅</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
