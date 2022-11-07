import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import Input from "../../Assets/Components/Input";
import MyButton from "../../Assets/Components/MyButton";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");

  return (
    //<KeyboardAvoidingView  enable style={{flex: 1}}>
    <ScrollView
      contentContainerStyle={{ flex: 1, backgroundColor: "#fff" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        {/* LOGO CONTAINER */}
        <View style={styles.containerLogo}>
          <Image
            source={require("./../../Assets/Images/logo-tc.png")}
            style={styles.img}
            resizeMode="contain"
          />
        </View>

        {/* LOGIN CONTAINER */}
        <View style={styles.containerLogin}>
          <View style={styles.loginArea}>
            {/*AREA MENSAGEM DE BOAS VINDAS */}
            <Animatable.View
              animation="fadeInLeft"
              delay={200}
              style={styles.welcomeArea}
            >
              <View style={styles.welcomeMessage}>
                <Text style={styles.welcomeText}>Bem-vindo ao </Text>
                <Text style={styles.welcomeTextGreen}>Te Controla</Text>
              </View>

              <Text style={styles.Text}>Faça login para continuar</Text>
            </Animatable.View>

            {/* AREA INPUTS */}
            <Animatable.View
              animation="fadeInUp"
              delay={200}
              style={styles.inputArea}
            >
              {/* Input do e-mail */}
              <View style={styles.input}>
                <Input
                  iconName={"mail-outline"}
                  placeholder="E-mail"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onChangeText={setEmail}
                />
              </View>
              {/* Input do e-mail */}
              <View style={styles.input}>
                <Input
                  iconName={"lock-closed-outline"}
                  placeholder="Senha"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                />
              </View>

              {/* AREA DO BOTÃO */}
              <View>
                <MyButton
                  text={"Entrar"}
                  func={() => navigation.navigate("Home")}
                />
              </View>
              {/* AREA ESQUECEU DA SENHA */}
              <View style={styles.forgetPasswordArea}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ForgetPass")}
                >
                  <Text style={styles.text}>Esqueceu a senha?</Text>
                </TouchableOpacity>
              </View>
            </Animatable.View>
          </View>
        </View>

        {/* OUTRA FORMA DE LOGAR */}

        <View style={styles.orArea}>
          <View style={styles.orLines}>
            <View style={styles.line}></View>
            <Text style={styles.orText}>ou</Text>
            <View style={styles.line}></View>
          </View>

          <TouchableOpacity style={styles.googleLogin}>
            <Image
              source={require("./../../Assets/Images/google-logo.png")}
              style={styles.imgGoogle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        {/*  */}
        <Animatable.View
          animation="fadeInUp"
          delay={200}
          style={styles.containerRegister}
        >
          <Text style={styles.text}>Novo no app? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.textRegister}>Cadastre-se</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </ScrollView>
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    // backgroundColor: 'black'
  },

  containerLogo: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
    // backgroundColor: "blue",
  },

  img: {
    height: "100%",
    // backgroundColor: 'pink'
  },

  containerLogin: {
    //flex: 3,
    justifyContent: "center",
    //backgroundColor: "red"
  },

  welcomeMessage: {
    flexDirection: "row",
    marginBottom: 5,
  },

  welcomeText: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#494A51",
  },

  welcomeTextGreen: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#309F5F",
  },

  Text: {
    fontSize: 18,
    color: "#494A51",
  },

  inputArea: {
    marginTop: 30,
    //backgroundColor: "violet"
  },

  input: {
    marginBottom: 15,
  },

  forgetPasswordArea: {
    marginTop: 15,
  },

  text: {
    fontSize: 16,
    color: "#494A51",
    textAlign: "center",
  },

  orArea:{
    marginTop: 15,
    alignItems: 'center'
  },

  orLines: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "pink",
    marginBottom: 20,
  },

  line: {
    width: "45%",
    borderWidth: 1,
    borderColor: "#494A5130",
  },

  orText: {
    fontSize: 16,
    color: "#494A5150",
    marginLeft: 7,
    marginRight: 7
  },

  googleLogin:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: '#494A5150',
    elevation: 4
  },

  imgGoogle:{
    height: 30
  },

  containerRegister: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: 6,
    //backgroundColor: "pink"
  },

  textRegister: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#309F5F",
    //backgroundColor: "pink"
  },
});
