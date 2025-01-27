import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import PrimaryButton from "@/components/PrimaryButton";

const SignUp = () => {
  const router = useRouter();

  const onRegister = () => {
    router.push("/login");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ marginTop: 40 }}
    >
      <Text>Sign Up</Text>

      <Image
        source={require("@/assets/images/sign-up.png")}
        style={{ width: "100%", height: 400 }}
        resizeMode="cover"
      />

      <View style={{ padding: 20, gap: 10 }}>
        <TextInput
          placeholder="Your name"
          style={{
            borderWidth: 1,
            paddingHorizontal: 20,
            height: 50,
            borderRadius: 8,
          }}
          onChangeText={(e) => console.log(e)}
        />

        <TextInput
          placeholder="Email address"
          style={{
            borderWidth: 1,
            paddingHorizontal: 20,
            height: 50,
            borderRadius: 8,
          }}
          onChangeText={(e) => console.log(e)}
        />

        <TextInput
          placeholder="Password"
          style={{
            borderWidth: 1,
            paddingHorizontal: 20,
            height: 50,
            borderRadius: 8,
          }}
          secureTextEntry={true}
          onChangeText={(e) => console.log(e)}
        />

        <TextInput
          placeholder="Re-enter password"
          style={{
            borderWidth: 1,
            paddingHorizontal: 20,
            height: 50,
            borderRadius: 8,
          }}
          secureTextEntry={true}
          onChangeText={(e) => console.log(e)}
        />

        <PrimaryButton title="Register" onPress={onRegister} />
      </View>
    </ScrollView>
  );
};

export default SignUp;
