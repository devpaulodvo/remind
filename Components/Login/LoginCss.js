import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
    },
    logoText:{
        fontSize: 40,
        fontWeight: "bold",
        textShadowColor: "#a3a3a3",
        textShadowOffset: {width: 1, height: 2},
        textShadowRadius: 4,
        shadowOpacity: -1,
        marginTop: 50,
        alignSelf: "center",
    },
    subText: {
        alignSelf: "center",
    },
    password: {
        marginTop: 40,
    },
    forgotPassword: {
        marginTop: 20,
        alignSelf: "flex-end",
    },
    or:{
        alignSelf: "center",
        marginTop: 50,
    }
})