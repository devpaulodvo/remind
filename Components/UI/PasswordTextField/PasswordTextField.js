import React from "react";
import { View, Image, TouchableOpacity, TextInput, Text } from "react-native";
import { styles } from "./PasswordTextFieldCss";

const PasswordTextField = ({onChange, style, label}) => {
    return(
        <React.Fragment>
            <Text style={[styles.label, style]}>{label}</Text>
            <View style={styles.container}>
                <TextInput
                textContentType={'password'}
                onChange={onChange}
                secureTextEntry={true}
                style={styles.password}
                />
                <TouchableOpacity style={styles.eye} onPress={()=>console.log("Test")}>
                    <Image source={require('./Hide.png')}/>
                </TouchableOpacity>
            </View>  
        </React.Fragment>
    );
}



export default PasswordTextField;