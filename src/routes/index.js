import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "../screens/login";
import { Lista } from "../screens/lista";
import { Cadastro } from "../screens/cadastro";
import { Agendamento } from "../screens/agendamento";
import { Confirmacao } from "../screens/confirmacao";

const { Navigator, Screen } = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        <Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Screen
          name="Lista"
          component={Lista}
          options={{
            headerShown: true,
            title: "Barbearias",
            headerStyle: {
              backgroundColor: "#232129",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />
        <Screen
          name="Agendamento"
          component={Agendamento}
          options={{
            headerShown: true,
            title: "Agendamento",
            headerStyle: {
              backgroundColor: "#232129",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />
        <Screen
          name="Confirmacao"
          component={Confirmacao}
          options={{
            headerShown: true,
            title: "Confirmacao",
            headerStyle: {
              backgroundColor: "#232129",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
