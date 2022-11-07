import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { Card } from "react-native-shadow-cards";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Logo from "../../Assets/Components/Logo";
import Input from "../../Assets/Components/Input";
import MyButton from "../../Assets/Components/MyButton";

export default function ForgetPass() {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, backgroundColor: "#fff" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
          <View style={styles.logo}>
            <Logo />
          </View>

          <Animatable.View
            animation="fadeInUp"
            delay={200}
            style={styles.containerForgetPass}
          >
            <Card style={styles.areaForgetPass}>
              <Text style={styles.textTitle}>Esqueci minha senha</Text>

              <Text style={styles.text}>
                Para redefinir sua senha, informe o e-mail cadastrado na sua
                conta e lhe enviaremos um link com instruções
              </Text>

              {/* Input do e-mail */}
              <View style={styles.inputArea}>
                <Input
                  iconName={"mail-outline"}
                  placeholder="E-mail"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                />
              </View>

              <MyButton text={"Enviar"} />

              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.textCancelBtn}>Cancelar</Text>
              </TouchableOpacity>
            </Card>
          </Animatable.View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    //backgroundColor: "pink"
  },

  logo:{
    height: 60,
    // backgroundColor: 'green'
  },

  containerForgetPass: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "pink"
  },

  areaForgetPass: {
    width: "100%",
    height: "65%",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    elevation: 10,

    //backgroundColor: "blue",
  },

  textTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#494A51",
    textAlign: "center",
    // marginBottom: 20
  },

  text: {
    textAlign: "center",
    fontSize: 16,
    color: "#494A51",
  },

  textCancelBtn: {
    color: "#E35D4D",
    fontSize: 20,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
