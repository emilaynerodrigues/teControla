import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
  } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import InputCreate from "../../Assets/Components/InputCreate";

export default function NewDespesa() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
    <ScrollView contentContainerStyle={{flex: 1, backgroundColor: "#309F5F"}} showsVerticalScrollIndicator={false}>
      <StatusBar
          backgroundColor= "#309F5F"
          barStyle="light-content"
        />
        <View style={styles.container}>

            <View style={styles.inputArea}>

                <View style={styles.input}>

                    <InputCreate
                        inputTitle={'Nome'}
                        placeholder='Ex: Netflix, compra da semana...'
                        autoCapitalize='none'
                        autoCorrect={false}
                      />
                </View>

                <View style={styles.input}>
                    <InputCreate
                        inputTitle={'Quantidade'}
                        placeholder='Ex: 1, 2, 3...'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='numeric'
                      />
                </View>

                <View style={styles.input}>
                    <InputCreate
                        inputTitle={'Valor'}
                        placeholder='Ex: 14.00, 30.50, 45.98...'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="numeric"
                      />
                </View>

                <View style={styles.input}>
                    <Text style={styles.inputTitle}>Descrição</Text>
                    <View style={styles.inputDescricao}>
                        <TextInput
                            style={styles.inputDescricaoArea}
                            placeholder="Aqui você digita suas obvervações e descrição dos produtos"
                            autoCorrect={false}
                        />        
                    </View>
                </View>

                <View style={styles.catArea}>
                  <TouchableOpacity style={styles.pickerCat}>
                    <Text style={styles.catOptions}>Categorias</Text>
                    <Ionicons name= "chevron-down" size={25} color="#494A5190" />
                  </TouchableOpacity>
                </View>

                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btnCancel}>
                        {/* <Text style={styles.textCancelBtn}>Cancelar</Text> */}
                        <Ionicons name= "close" size={35} color="#fff" /> 
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSave}>
                        <Ionicons name= "save-outline" size={35} color="#fff" /> 
                    </TouchableOpacity>
                </View>

            </View>


        </View>
    </ScrollView>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 30,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: "#fff",
  },

  inputArea:{
    flex: 1,
    paddingTop: 30
  },
  
  input:{
    marginBottom: 20
  },
  
  inputDescricao:{
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    height: 100,
    borderColor: "#494A5130",
    paddingHorizontal: 20
  },
  
  inputTitle:{
      color: "#494A5190",
      fontSize: 18,
      marginBottom: 10
  },
  
  inputDescricaoArea:{
      flex: 1,
      fontSize: 14,
      paddingBottom: 30,
      // backgroundColor: "violet"
  },
  
  catArea:{
    height: 60,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5
  },

  pickerCat:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  catOptions:{
    fontSize: 18,
    color: '#494A5190'
  },

  btnArea:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  // textCancelBtn:{
  //   color: "#DF7560",
  //   fontSize: 18,
  //   textAlign: "center",
  //   textDecorationLine: "underline"
  // },
  btnCancel:{
    backgroundColor: "#E35D4D",
    height: 60,
    width: 80,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  btnSave:{
    backgroundColor: "#309F5F",
    height: 60,
    width: 80,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
})

