import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const onLogin = () => {
    console.log("Continue button clicked!");
    router.push("/login");
  };

  const onRegister = () => {
    router.push("/signup");
  };

  return (
    <View style={{ gap: 10, paddingHorizontal: 16 }}>
      <Text>Hello Welcome to Oporishim.</Text>
      <PrimaryButton title="Login" onPress={onLogin} />
      <PrimaryButton title="Register" onPress={onRegister} />
    </View>
  );
}
