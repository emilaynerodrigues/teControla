import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';

import { 
  View,
  StyleSheet  } from 'react-native';

export default function SplashScreen() {

    const navigation = useNavigation();

 return (
    
   <View style={styles.container}>

        <LottieView
            style={styles.containerLottie}
            source={require("../../Assets/Images/splash.json")}
            autoPlay
            speed={1}
            loop={false}
            onAnimationFinish={ () => navigation.navigate("StartScreen")}
            
        />
   </View>

);
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    containerLottie:{
        // backgroundColor: "#000",
        height: "35%",
        justifyContent: "center",
        alignItems: "center"
        
    },
})