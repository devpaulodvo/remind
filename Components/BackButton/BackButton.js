import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const BackButton = ({style}) => {
    return(
        <TouchableOpacity style={style, styles.container}>
            <Image style={styles.image} source={require('./arrow_back_ios.png')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 35,
        height: 35,
        backgroundColor: '#EEEDED',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
})

export default BackButton;