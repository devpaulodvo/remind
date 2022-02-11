import React, { Children } from "react";
import { TextInput, Text } from "react-native";
import { styles } from "./TextFieldCss";

const TextField = ({onChangeText, label, style}) => {
    return(
        <React.Fragment>
        <Text style={[styles.label, style]}>{label}</Text>
        <TextInput 
        {...Children}
        onChangeText={onChangeText}
        style={[styles.input]}
        />
        </React.Fragment>
    );
}



export default TextField;