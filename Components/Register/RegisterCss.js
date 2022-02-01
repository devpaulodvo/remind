import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
    },
    innercontainer:{
        padding:20,
    },
    signupText: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 10,
    },
    subtext:{
        marginBottom: 20,
    },
    chckbx:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
    },
    text:{
        lineHeight: 22,
        textDecorationLine: "underline",
        color: "#00087d"
    },
    textboxmargintop:{
        marginTop: 20,
    }
})