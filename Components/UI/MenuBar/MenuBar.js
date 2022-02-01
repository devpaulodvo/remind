import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { styles } from "./MenubarCss";

const MenuBar = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                <Image source={require("./icons/home.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Image source={require("./icons/chathead.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Image source={require("./icons/profile.png")}/>
            </TouchableOpacity>
        </View>
    )
}

export default MenuBar;