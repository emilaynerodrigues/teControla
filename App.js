import React from 'react';
import { StatusBar, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/Routes'

export default function App() {
  return (
   <NavigationContainer>
      <StatusBar
        backgroundColor= "#fff"
        barStyle="dark-content"
      />
      <Routes/>
   </NavigationContainer>
  );
}