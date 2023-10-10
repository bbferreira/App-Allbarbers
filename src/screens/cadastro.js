import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import logo from "../../assets/logo.png";

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export const Cadastro = () => {
  const navigation = useNavigation();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <>
      <StatusBar style="light" />
      <View
        style={{
          padding: 50,
          height: "100%",
          justifyContent: "center",
          backgroundColor: "#312E38",
        }}
      >
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.image} resizeMode="cover" />
        </View>
        <Text style={styles.title}>Faça seu Cadastro</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Digite o seu login"
            placeholderTextColor={"#A9A9A9"}
            onChangeText={(novoLogin) => setLogin(novoLogin)}
            value={login}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor={"#A9A9A9"}
            secureTextEntry={true}
            onChangeText={(novaSenha) => setSenha(novaSenha)}
            value={senha}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite novamente sua senha"
            placeholderTextColor={"#A9A9A9"}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 310,
    height: 140,
  },
  title: {
    margin: 50,
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 15,
    backgroundColor: "#232129",
    color: "#FFFFFFFF",
  },
  button: {
    height: 50,
    marginTop: 15,
    borderRadius: 4,
    justifyContent: "center",
    backgroundColor: "#FF9000",
  },
  buttonText: {
    color: "#312E38",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
