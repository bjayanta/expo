import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";

const DrawerRoot = () => {
  return (
    <GestureHandlerRootView>
      <Drawer
        drawerContent={(props: DrawerContentComponentProps) => (
          <CustomDrawer {...props} />
        )}
      >
        <Drawer.Screen name="index" options={{ title: "Home" }} />
        <Drawer.Screen name="profile" options={{ title: "Profile" }} />
        <Drawer.Screen name="contact" options={{ title: "Contact" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
};

const CustomDrawer = (props: DrawerContentComponentProps) => (
  <View style={{ flex: 1 }}>
    <DrawerContentScrollView {...props}>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <View>
          <Text>Jayanta biswas</Text>
          <Text>bjayanta.me@gmail.com</Text>
        </View>

        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/37167474?v=4",
          }}
          style={{ width: 100, height: 100, borderRadius: 30 }}
        />
      </View>

      <DrawerItemList {...props} />
      <Text>Footer</Text>
    </DrawerContentScrollView>

    <Text
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        color: "red",
        fontWeight: "bold",
        backgroundColor: "black",
      }}
    >
      @ Copyright: Jayanta biswas
    </Text>
  </View>
);

export default DrawerRoot;
