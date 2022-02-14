import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ButtonComponentCss";

const ButtonComponent = ({title, onPress, backgroundColor, marginTop}) =>{
    return (
        <TouchableOpacity style={[styles.button, {marginTop: marginTop},{backgroundColor: `${backgroundColor}`}]} onPress={onPress}> 
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    );
}


export default ButtonComponent;
