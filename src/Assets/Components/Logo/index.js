import React from 'react';
import {
    StatusBar,
    View,
    Image,
    StyleSheet,
     } from 'react-native';

import * as Animatable from "react-native-animatable";

export default function Logo() {

    return (
        <Animatable.View animation= "fadeInDown" delay={200} style={styles.container}>
            <StatusBar
                backgroundColor= "#fff"
                barStyle="dark-content"
            />
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../Images/logo.png')}
                    style={styles.img}
                    resizeMode="contain"
                />
            </View>
        </Animatable.View>
    );
}

const styles = StyleSheet.create({
    containerLogo:{
        // backgroundColor: "red",
        // flex: 1,
        height: '100%',
        
    },
    img:{
        width:'60%',
        height: '100%',
        // backgroundColor: 'black'
    }
})