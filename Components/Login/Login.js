import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import PasswordTextField from "../UI/PasswordTextField/PasswordTextField";
import TextField from "../UI/TextField/TextField";
import { styles } from "./LoginCss";

const Login = () => {
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.logoText}>REMIND</Text>
                <Text style={styles.subText}>Your Daily App</Text>
                <TextField label={"Email Address"} style={styles.password}/>
                <PasswordTextField label={"Password"} style={styles.password}/>
                <TouchableOpacity onPress={null}>
                    <Text  style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                <ButtonComponent title={"Login"} backgroundColor={"#21d1a8"}/>
                <Text style={styles.or}>OR</Text>
                <ButtonComponent title={"Register"} backgroundColor={"#4b21d1"}/>
            </ScrollView>
        </View>
    )
}

export default Login;