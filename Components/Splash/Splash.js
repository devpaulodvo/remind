import React from "react";
import { View, Text } from "react-native";
import { styles } from "./SplashCss";

const Splash = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.logoText}>REMIND</Text>
            <Text>Your Daily App</Text>
        </View>
    )
}

export default Splash;