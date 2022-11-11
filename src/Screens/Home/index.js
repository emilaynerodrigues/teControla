import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import BottomSheet from "../../Assets/Components/BottomSheet";
import { Provider } from "react-native-paper";

export default function Home() {
  const navigation = useNavigation();

  const [show, setShow] = useState(false);

  return (
    <Provider style={[{ flex: 1 }]}>
      <ScrollView
        contentContainerStyle={{ flex: 1, backgroundColor: "#309F5F" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
        <StatusBar style='auto' />
          <View style={styles.greenArea}>
            <View style={styles.navbar}>
              <TouchableOpacity
                style={styles.changeScreen}
                onPress={() => setShow(true)}
              >
                <Text style={[styles.text, styles.textWeight]}>Todos</Text>
                <Ionicons name="chevron-down-outline" size={25} color="#fff" />
              </TouchableOpacity>

              <BottomSheet
                show={show}
                onDismiss={() => {
                  setShow(false);
                }}
                enableBackdropDismiss
              ></BottomSheet>

            </View>
          </View>

          <View style={styles.flatlistDespesas}>
            <View style={styles.btnPosition}>
              <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate("NewDespesa")}
              >
                <Ionicons name="add" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.infoArea}>
            <View style={styles.faltaPagar}></View>

            <View style={styles.pago}></View>
          </View>
        </View>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },

  greenArea: {
    flex: 2,
    paddingHorizontal: 15,
  },

  changeScreen: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    color: "#fff",
  },

  textWeight: {
    fontWeight: "600",
  },

  flatlistDespesas: {
    flex: 8,
    backgroundColor: "#fff",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },

  btnPosition: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 10,
    marginBottom: 10,
  },

  btnCreate: {
    height: 70,
    width: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#309F5F",
    elevation: 5,
  },

  infoArea: {
    flex: 1.2,
  },

  faltaPagar: {
    flex: 1,
    backgroundColor: "#E35D4D",
  },

  pago: {
    flex: 1,
  },
});
