import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();

  const onLogin = () => {
    router.back();
  };

  const onHome = () => {
    router.push("/");
  };

  return (
    <View>
      <Text>Login</Text>

      <Image
        source={require("@/assets/images/login.png")}
        style={{ width: "100%", height: 400 }}
        resizeMode="cover"
      />

      <View style={{ padding: 20, gap: 10 }}>
        <TextInput
          placeholder="Enter your email"
          style={{
            borderWidth: 1,
            paddingHorizontal: 20,
            height: 50,
            borderRadius: 8,
          }}
          onChangeText={(e) => console.log(e)}
        />

        <TextInput
          placeholder="Enter your password"
          style={{
            borderWidth: 1,
            paddingHorizontal: 20,
            height: 50,
            borderRadius: 8,
          }}
          secureTextEntry={true}
          onChangeText={(e) => console.log(e)}
        />

        <PrimaryButton title="Login" onPress={onLogin} />
        <PrimaryButton title="Home" onPress={onHome} />
      </View>
    </View>
  );
};

export default Login;
