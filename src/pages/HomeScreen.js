import React from "react";
import { View, Text, Button } from "react-native";

// IMPORT STYLES
import { styles } from "../styles/styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#5B3d28", fontSize: 25, fontStyle: "italic" }}>
        Seja muito bem vindo (a)!
      </Text>
    </View>
  );
}
