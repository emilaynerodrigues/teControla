import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { 
  StatusBar,
  View,
  Text, 
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
  } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
    <ScrollView contentContainerStyle={{flex: 1, backgroundColor: "#309F5F"}} showsVerticalScrollIndicator={false}>
      <StatusBar
          backgroundColor= "#309F5F"
          barStyle="light-content"
        />
        <View style={styles.container}>
            <View style={styles.greenArea}>
                <View style={styles.navbar}>
                  <TouchableOpacity style={styles.changeScreen}>
                    <Text style={styles.text}>Todos</Text>
                    <Ionicons name="chevron-down-outline" size={25} color="#fff" />
                    
                  </TouchableOpacity>
                </View>
            </View>

            <View style={styles.flatlistDespesas}>

                <View style={styles.btnPosition}>
                    <TouchableOpacity style={styles.btnCreate} onPress={ () => navigation.navigate("NewDespesa") }>
                      <Ionicons name="add" size={30} color="#fff" /> 
                    </TouchableOpacity>
                  </View>
            </View>

            <View style={styles.infoArea}>
                <View style={styles.faltaPagar}>

                </View>
                
                <View style={styles.pago}>

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
  },

  greenArea:{
    flex: 2,
    paddingHorizontal: 15
  },
  
  changeScreen:{
    flexDirection: 'row',
    alignItems: 'center'
  },

  text: {
    fontSize: 18,
    fontWeight: '600',
    color: "#fff",
  },

  flatlistDespesas:{
    flex: 8,
    backgroundColor: "#fff",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20
  },
  
  btnPosition:{
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 10,
    marginBottom: 10
  },
  
  btnCreate:{
    height: 70,
    width: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#309F5F",
    elevation: 5
  },

  infoArea:{
    flex: 1.2
  },

  faltaPagar:{
    flex: 1,
    backgroundColor: "#E35D4D"
  },

  pago:{
    flex: 1
  },
})

