import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={() => setVisible(true)} />

      <Modal visible={visible} animationType="slide" transparent>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <View style={{ backgroundColor: "blue", height: 300 }}>
            <Button title="Close Modal" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
