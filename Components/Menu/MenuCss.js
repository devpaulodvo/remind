import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#FAFAFA",
    },
    menuitems: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 40,
        padding: 20,
    },
    item: {
        width: '50%',
        alignItems: "center",
        marginBottom: 70,
    },
    itemtext: {
        marginBottom: 10,
        alignSelf: "center"
    }
})