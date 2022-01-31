import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
    },
    password:{
        width: 298,
        height: 50,
        backgroundColor: 'white',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderColor: '#EBEDFF',
        fontSize: 13,
        paddingLeft: 20,
    },
    eye: {
        alignItems:"center",
        justifyContent:"center",
        width:50,
        height: 50,
        borderTopRightRadius:8,
        borderBottomRightRadius: 8,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        backgroundColor: 'white',
        borderColor: '#EBEDFF',
    },
    label:{
        fontSize: 15,
        marginBottom: 10,
    }
})