import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import BackButton from "../UI/BackButton/BackButton";
import MenuBar from "../UI/MenuBar/MenuBar";
import { firebase } from '@react-native-firebase/database';
import { useSelector } from "react-redux";
import { userdetails } from "../slice/setUserStateSlice";

const ToDo = ({navigation}) => {
    const userID = useSelector(userdetails)
    const [tasks, setTasks] = useState({});
    
    useEffect(()=>{
        const ac = new AbortController();

        firebase
        .app()
        .database('https://remind-app-57e14-default-rtdb.asia-southeast1.firebasedatabase.app/')
        .ref()
        .child("task")
        .orderByChild("uid")
        .equalTo(userID)
        .on("value", snapshot => {
            if(snapshot.val() !== null){
                setTasks({...snapshot.val()})
            }else{
                setTasks({});
            }
        })

        return () => ac.abort();
    }, [])
    
    return(
        <View style={styles.container}>
            <View style={styles.topOptions}>
            <BackButton onPress={()=>navigation.goBack()} style={styles.backbtn}/>
            <TouchableOpacity onPress={()=>navigation.push("AddTodo")}>
                <Image source={require('./icons/addtodo.png')}/>
            </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollcontainer}>
                    {
                        Object.keys(tasks).map((id)=>{
                            return(
                            <View key={id} style={styles.itemcontainer}>
                                <View style={styles.textContainer}>
                                    <Text numberOfLines={1} style={styles.itemtext}>
                                    {tasks[id].tasktitle.length < 22
                                    ? tasks[id].tasktitle
                                    : `${tasks[id].tasktitle.substring(0, 21)}...`}
                                    </Text>
                                    <Text numberOfLines={1} style={styles.itemtext}>
                                    {tasks[id].taskdesc.length < 22
                                    ? tasks[id].taskdesc
                                    : `${tasks[id].taskdesc.substring(0, 21)}...`}
                                    </Text>
                                    <Text style={styles.itemtext}>
                                    Due: {tasks[id].date}
                                    </Text>
                                </View>
                            <Image source={require('./icons/pending.png')}/>
                            </View>
                            )
                        })
                    }
                    
            </ScrollView>
            
            <MenuBar navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
    topOptions: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#B6B5B3",
    },
    scrollcontainer: {
        paddingHorizontal: 40,
        paddingTop: 20,
    },
    textContainer: {
        flexDirection: "column",
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
})

export default ToDo;