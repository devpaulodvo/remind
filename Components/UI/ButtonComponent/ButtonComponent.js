import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ButtonComponentCss";

const ButtonComponent = ({title, onPress, backgroundColor}) =>{
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: `${backgroundColor}`}]} onPress={onPress}> 
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    );
}


export default ButtonComponent;
