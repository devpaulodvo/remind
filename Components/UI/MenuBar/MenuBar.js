import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { styles } from "./MenubarCss";
import auth from '@react-native-firebase/auth';

const MenuBar = ({navigation}) => {

    const signOut = async () => {
        await navigation.navigate('LoginStack');
        await auth().signOut();
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                <Image source={require("./icons/home.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Image source={require("./icons/chathead.png")}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={signOut} style={styles.item}>
                <Image source={require("./icons/profile.png")}/>
            </TouchableOpacity>
        </View>
    )
}

export default MenuBar;