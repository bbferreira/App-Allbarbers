import React from "react";

import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";

import logo from "../../assets/logo.png";

export const Login = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>

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
        <Text style={styles.title}>Faça seu Login</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Lista")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cadastro");
          }}
        >
          <Text style={styles.registerButtton}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ ScrollView>
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
  registerButtton: {
    margin: 20,
    color: "#A9A9A9",
    fontWeight: "bold",
    textAlign: "center",
  },
});
