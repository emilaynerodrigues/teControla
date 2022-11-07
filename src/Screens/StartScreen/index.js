import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Logo from "../../Assets/Components/Logo";
import * as Animatable from "react-native-animatable";

export default function StartScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>

      <Animatable.View
        animation="fadeInLeft"
        delay={200}
        style={styles.containerText}
      >
        <Text style={styles.welcomeText}>Bem-vindo ao Te Controla</Text>
        <Text style={styles.text}>
          Aplicativo que ajuda você a ter maior controle sobre suas despesas
        </Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInLeft"
        delay={200}
        style={styles.containerImg}
      >
        <LottieView
          style={{ width: "100%" }}
          source={require("../../Assets/Images/girl.json")}
          autoPlay
          speed={1.5}
          loop
        />
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={200}
        style={styles.containerBtn}
      >
        <TouchableOpacity
          style={styles.btnAreaLogin}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.btnLogin}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnAreaCadastro}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.btnCadastro}>CADASTRO</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: "#fff",
  },
  
  logo:{
    height: 60,
    // backgroundColor: 'green'
  },
  
  containerText: {
    flex: 2,
    marginTop: 50,
    // backgroundColor: "red",
  },
  
  welcomeText: {
    color: "#494A51",
    fontSize: 27,
    fontWeight: "600",
  },
  
  text: {
    flex: 1,
    /*backgroundColor: "red",*/
    color: "#494A51",
    fontSize: 18,
    textAlign: "justify",
    marginTop: 20
  },
  
  containerImg: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  
  containerBtn: {
    flex: 2,
    // backgroundColor: "pink",
  },
  
  btnAreaLogin: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#309F5F",
    width: "100%",
    height: 60,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 15,
  },

  btnAreaCadastro: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#309F5F",
    borderWidth: 1.3,
    backgroundColor: "#FFF",
    width: "100%",
    height: 60,
    borderRadius: 10,
    elevation: 5,
  },
  
  btnLogin: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
  },

  btnCadastro: {
    fontSize: 20,
    color: "#494A51",
    fontWeight: "600",
  },
});
