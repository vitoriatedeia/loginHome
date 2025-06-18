import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";

// Importar Hook UseState
import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  function verificarLogin() {
    console.log(username, password);
    if (username === "Kauê" && password === "1510") {
      navigation.navigate("Home");
    } else {
      alert("Username ou password inválidos!");
    }
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/fundo.jpg")}
      resizeMode="cover"
    >
      <View style={styles.view}>
        <Text style={styles.login}>LOGIN</Text>
        <Text style={styles.subLogin}>TO CONTINUE</Text>

        <TextInput
          style={styles.username}
          placeholder="Username"
          placeholderTextColor="grey"
          onChangeText={(value) => setUsername(value)}
          value={username}
        />

        <TextInput
          style={styles.password}
          placeholder="Password"
          placeholderTextColor="grey"
          onChangeText={(value) => setPassword(value)}
          value={password}
        />

        <TouchableOpacity style={styles.btn} onPress={verificarLogin}>
          <Text style={styles.txtbtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
  },
  login: {
    fontSize: 45,
    color: "gray",
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subLogin: {
    fontSize: 17,
    color: "grey",
    fontWeight: 20,
    marginBottom: 40,
  },
  username: {
    margin: 30,
    borderBottomWidth: 1,
    width: 300,
    borderBottomColor: "grey",
    padding: 5,
  },
  password: {
    margin: 30,
    borderBottomWidth: 1,
    width: 300,
    borderBottomColor: "grey",
    padding: 5,
  },
  txtbtn: {
    color: "grey",
  },
  btn: {
    width: 250,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 40,
    borderRadius: 5,
    shadowColor: "#000",
    shadowRadius: 10,
    shadowOpacity: 0.25,
    elevation: 5,
    shadowOffset: { width: 5, height: 5 },
  },
});
