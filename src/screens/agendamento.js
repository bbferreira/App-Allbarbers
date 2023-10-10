import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

import canhetes from "../../assets/Barbers/canhetes.png";
import { Lista } from "./lista";
import { Confirmacao } from "./confirmacao";


export const Agendamento = () => {
  
  const [showDatePicker, setConstShowDatePicker, NavigationContainer] = useState();
    const navigation = useNavigation();
  


  return (
    <SafeAreaView style={{ backgroundColor: "#312E38", flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Text style={{ color: "white", fontSize: 24, marginVertical: 24 }}>
          Escolha a data
        </Text>

        <TouchableOpacity
              style={{
                padding: 20,
                marginBottom: 12,
                borderRadius: 10,
                flexDirection: "row",
                backgroundColor: "#28262E",
              }}
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
          onPress={() => console.log(setConstShowDatePicker(true))}
          style={{
            height: 46,
            backgroundColor: "#ff9000",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          
        >
          
          <Text>Escolha sua data</Text>
        </TouchableOpacity>

       

<Text style={{ color: "white", fontSize: 24, marginVertical: 24 }}>
          Tipo de Serviço
        </Text>

<TouchableOpacity
              style={{
                padding: 20,
                marginBottom: 12,
                borderRadius: 10,
                flexDirection: "row",
                backgroundColor: "#28262E",
              }}
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
                    Corte Tradicional{" "}
                  </Text>
                  <Text style={{ color: "white" }}> Duração: 50 minutos </Text>
                  <Text style={{ color: "white" }}> Valor: R$ 25,00 </Text>
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
                    Corte Degradê{" "}
                  </Text>
                  <Text style={{ color: "white" }}> Duração: 60 minutos </Text>
                  <Text style={{ color: "white" }}> Valor: R$ 30,00 </Text>
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
                    Corte Tradicional + Barba{" "}
                  </Text>
                  <Text style={{ color: "white" }}> Duração: 70 minutos </Text>
                  <Text style={{ color: "white" }}> Valor: R$ 50,00 </Text>
                </View>
              </>
            </TouchableOpacity>

            
            <TouchableOpacity
          style={{
            height: 46,
            backgroundColor: "#ff9000",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Confirmacao")}
            >
        
          
          <Text>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
