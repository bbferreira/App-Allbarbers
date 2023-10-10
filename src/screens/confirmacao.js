import React from 'react'; 
import { useNavigation } from "@react-navigation/native";
import {
    Text,
    StyleSheet,
    View,
    StatusBar,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    Image,
}

from 'react-native';
//import vetor from './assets/vetor.png'

export const Confirmacao = () => {
    const navigation = useNavigation();

return(
<SafeAreaView style={styles.container}>
    <ScrollView>
        <StatusBar style="light" />
        <View style={styles.agendamento}>

    <Text style={styles.title}>
    Agendamento concluido
    </Text>

    <TouchableOpacity style={styles.button}
    onPress={() => navigation.navigate("Login")}
    >
        
    <Text style={styles.textButton}>Ok</Text>    
    </TouchableOpacity>

    </View>
    </ScrollView>
    </SafeAreaView>
);
}
const styles = StyleSheet.create({
    container: {
    height: "100%",
    padding: 20,
    justifyContent: "center",
    flex: 1,
    paddingTop: StatusBar.currentHeight, ScrollView,
    backgroundColor: "#312E38",
},

agendamento: {
    width:375,
    height:812,
},
title: {
    position:'relative',
    width:199,
    height:80,
    top:341,
    left:88,
    lineHeight:39.57,
    color:"#F4EDE8",
    fontSize:30,
    textAlign:'center',
},
button:{
    position:'absolute',
        width:100,
        height:50,
        top:510,
        left:138,
        borderRadius:10,
        backgroundColor: "#FF9000",

},
textButton:{
    padding:20,
    fontSize:14,
    textAlign:'center',
    color:"#312E38",
},
vetor:{
    position:'absolute',
        width:100,
        height:50,
        top:250,
        left:138,
}


});