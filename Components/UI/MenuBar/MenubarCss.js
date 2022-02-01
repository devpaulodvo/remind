import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "white",
        height: 90,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        borderWidth: 1.5,
        borderColor: "#D2D2D2",
        paddingBottom: 20,
    },
    item: {
        alignSelf: "center",
    }
})