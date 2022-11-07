import { StackRouter } from "@react-navigation/native";
import {  createNativeStackNavigator } from "@react-navigation/native-stack"

import SplashScreen from "../Screens/SplashScreen"
import StartScreen from "../Screens/StartScreen"
import Login from "../Screens/Login"
import SignUp from "../Screens/SignUp"
import ForgetPass from "../Screens/ForgetPass"
import Home from "../Screens/Home"
import NewDespesa from "../Screens/NewDespesa";


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
    
        <Stack.Navigator screenOptions={{headerShown: false, headerTitleAlign: 'center',  headerStyle:{backgroundColor: '#309F5F'}}}>
            {/* tela animação inicial */}
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
            />
            {/* tela de iniciar */}
            <Stack.Screen
                name="StartScreen"
                component={StartScreen}   
            />
            {/* tela de login */}
            <Stack.Screen
                name="Login"
                component={Login}
            />
            {/* tela de cadastro */}
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerShown: true,
                    title: '',
                    headerTintColor: '#494A51',
                    headerShadowVisible: false,
                    headerStyle:{backgroundColor: '#fff'}
                }}
            />
            {/* tela esqueceu a senha */}
            <Stack.Screen
                name="ForgetPass"
                component={ForgetPass}
                // options={{
                //     headerShown: true,
                //     title: '',
                //     headerTintColor: '#494A51',
                //     headerShadowVisible: false
                // }}
            />
            {/* home */}
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="NewDespesa"
                component={NewDespesa}
                options={{
                    headerShown: true,
                    title: 'Nova despesa',
                    headerTintColor: '#fff',
                    headerShadowVisible: false,
                   
                    
                }}
            />

        </Stack.Navigator>
    )
}