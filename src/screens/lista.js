import React from "react";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import thiago from "../../assets/Barbers/thiago.png";
import canhetes from "../../assets/Barbers/canhetes.png";
import barbados from "../../assets/Barbers/barbados.png";
import lossantos from "../../assets/Barbers/lossantos.png";

export const Lista = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <SafeAreaView style={{ backgroundColor: "#312E38", flex: 1 }}>
        <View style={{ paddingHorizontal: 20 }}>
          <ScrollView>
            <Text style={{ color: "white", fontSize: 24 }}> Bem-vindo, </Text>
            <Text style={{ color: "#FF9000", fontSize: 29 }}>
              {" "}
              Otávio Arcanjo{" "}
            </Text>

            <Text
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: 24,
                marginVertical: 30,
              }}
            >
              {" "}
              Barbearias Disponíveis{" "}
            </Text>
            <TouchableOpacity
              style={{
                padding: 20,
                marginBottom: 12,
                borderRadius: 10,
                flexDirection: "row",
                backgroundColor: "#28262E",
              }}
              onPress={() => navigation.navigate("Agendamento")}
            >
              <>
                <Image
                  source={canhetes}
                  style={{ width: 70, height: 70, borderRadius: 70 }}
                ></Image>
                <View
                  style={{
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                  >
                    {" "}
                    Canhetes Barbearia{" "}
                  </Text>
                  <Text style={{ color: "white" }}> Segunda á sexta </Text>
                  <Text style={{ color: "white" }}> 8h às 18h </Text>
                </View>
              </>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 20,
                marginBottom: 12,
                borderRadius: 10,
                flexDirection: "row",
                backgroundColor: "#28262E",
              }}
              onPress={() => navigation.navigate("Agendamento")}
            >
              <>
                <Image
                  source={thiago}
                  style={{ width: 70, height: 70, borderRadius: 70 }}
                ></Image>
                <View
                  style={{
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                  >
                    {" "}
                    Thiago Felix Barber Shop{" "}
                  </Text>
                  <Text style={{ color: "white" }}> Segunda á sexta </Text>
                  <Text style={{ color: "white" }}> 8h às 18h </Text>
                </View>
              </>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 20,
                marginBottom: 12,
                borderRadius: 10,
                flexDirection: "row",
                backgroundColor: "#28262E",
              }}
              onPress={() => navigation.navigate("Agendamento")}
            >
              <>
                <Image
                  source={lossantos}
                  style={{ width: 70, height: 70, borderRadius: 70 }}
                ></Image>
                <View
                  style={{
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                  >
                    {" "}
                    LosSantos Barbearia{" "}
                  </Text>
                  <Text style={{ color: "white" }}> Segunda á sexta </Text>
                  <Text style={{ color: "white" }}> 8h às 18h </Text>
                </View>
              </>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 20,
                marginBottom: 12,
                borderRadius: 10,
                flexDirection: "row",
                backgroundColor: "#28262E",
              }}
              onPress={() => navigation.navigate("Agendamento")}
            >
              <>
                <Image
                  source={barbados}
                  style={{ width: 70, height: 70, borderRadius: 70 }}
                ></Image>
                <View
                  style={{
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                  >
                    {" "}
                    Barbados{" "}
                  </Text>
                  <Text style={{ color: "white" }}> Segunda á sexta </Text>
                  <Text style={{ color: "white" }}> 8h às 18h </Text>
                </View>
              </>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};
