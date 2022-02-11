import React, { useState } from "react";
import { View, Image, TouchableOpacity, TextInput, Text } from "react-native";
import { styles } from "./PasswordTextFieldCss";

const PasswordTextField = ({onChangeText, style, label}) => {
    const [secureText, setSecureText] = useState(true);
    return(
        <React.Fragment>
            <Text style={[styles.label, style]}>{label}</Text>
            <View style={styles.container}>
                <TextInput
                textContentType={'password'}
                onChangeText={onChangeText}
                secureTextEntry={secureText}
                style={styles.password}
                />
                <TouchableOpacity style={styles.eye} onPress={()=>setSecureText(!secureText)}>
                    <Image source={require('./Hide.png')}/>
                </TouchableOpacity>
            </View>  
        </React.Fragment>
    );
}



export default PasswordTextField;