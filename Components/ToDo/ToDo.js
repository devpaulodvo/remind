import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import MenuBar from "../UI/MenuBar/MenuBar";

const ToDo = () => {
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollcontainer}>
                <View style={styles.itemcontainer}>
                    <Text style={styles.itemtext}>Study React Hooks{"\n"}Due: Jan 30, 2022</Text>
                    <Image source={require('./icons/pending.png')}/>
                </View>
                <View style={styles.itemcontainer}>
                    <Text style={styles.itemtext}>Study React Hooks{"\n"}Due: Jan 30, 2022</Text>
                    <Image source={require('./icons/pending.png')}/>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.addtodo}>
                <Image source={require('./icons/addtodo.png')}/>
            </TouchableOpacity>
            <MenuBar/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
    scrollcontainer: {
        paddingHorizontal: 40,
        paddingTop: 40,
    },
    itemcontainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderWidth: 1,
        borderRadius: 9,
        borderColor: "#B6B5B3",
        padding: 20,
        marginBottom: 20,
    },
    itemtext: {
        fontSize: 18,
        lineHeight: 22,
    },
    addtodo: {
        alignSelf: "center",
        margin: 15,
    }
})

export default ToDo;