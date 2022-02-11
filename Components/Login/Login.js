import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import ButtonComponent from "../UI/ButtonComponent/ButtonComponent";
import PasswordTextField from "../UI/PasswordTextField/PasswordTextField";
import TextField from "../UI/TextField/TextField";
import { styles } from "./LoginCss";
import auth from '@react-native-firebase/auth';
import { useSelector, useDispatch } from 'react-redux'
import { setStatusReducer, setUserReducer } from '../slice/setUserStateSlice';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()

    const handleSignIn = () => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(()=>{
            navigation.navigate('MenuStack')
        }
        ).catch(error=>{
            if(error.code === 'auth/invalid-password' || error.code === 'auth/invalid-email'){
                console.log('Invalid Email or Password!');
            }
            console.error(error);
        })
    }

    const handleRegister = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch(setUserReducer(user.value))
                navigation.navigate('MenuStack');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                }
                console.error(error);
            });
    }

    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.logoText}>REMIND</Text>
                <Text style={styles.subText}>Your Daily App</Text>
                <TextField value={email} onChangeText={text=>setEmail(text)} label={"Email Address"} style={styles.password}/>
                <PasswordTextField value={password} onChangeText={text=>setPassword(text)} label={"Password"} style={styles.password}/>
                <TouchableOpacity onPress={null}>
                    <Text  style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                <ButtonComponent onPress={handleSignIn} title={"Login"} backgroundColor={"#21d1a8"}/>
                <Text style={styles.or}>OR</Text>
                <ButtonComponent onPress={handleRegister} title={"Register"} backgroundColor={"#4b21d1"}/>
            </ScrollView>
        </View>
    )

    
}

export default Login;