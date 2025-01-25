import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { IconSymbol } from "@/app-example/components/ui/IconSymbol";

const TabRoot = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="contacts" color={"red"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabRoot;
