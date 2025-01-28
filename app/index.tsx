import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [visible, setVisible] = useState(false);

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold text-lg text-blue-600">Hello World!</Text>
    </View>
  );
}
