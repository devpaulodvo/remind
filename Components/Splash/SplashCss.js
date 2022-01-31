import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 40,
    },
    logoText:{
        fontSize: 60,
        fontWeight: "bold",
        textShadowColor: "#a3a3a3",
        textShadowOffset: {width: 1, height: 2},
        textShadowRadius: 4,
        shadowOpacity: -1

    }
})