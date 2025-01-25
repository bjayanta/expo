import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();

  const [data, setData] = useState<any>({
    email: "",
    password: "",
  });

  const onLogin = () => {
    console.log("Data: ", data);
    // router.back();
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
          inputMode="email"
          onChangeText={(e: string) =>
            setData((prev: any) => ({ ...prev, email: e }))
          }
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
          onChangeText={(e: string) =>
            setData((prev: any) => ({ ...prev, password: e }))
          }
        />

        <PrimaryButton title="Login" onPress={onLogin} />
        <PrimaryButton title="Home" onPress={onHome} />
      </View>
    </View>
  );
};

export default Login;
