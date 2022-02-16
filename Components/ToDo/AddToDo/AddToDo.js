import React, { useState} from "react";
import { ScrollView, View, Text, TextInput, Alert } from "react-native";
import BackButton from "../../UI/BackButton/BackButton";
import TextField from "../../UI/TextField/TextField";
import ButtonComponent from "../../UI/ButtonComponent/ButtonComponent";
import { styles } from "./AddToDoCss";
import DatePicker from 'react-native-date-picker';
import { firebase } from '@react-native-firebase/database';
import { useSelector } from "react-redux";
import { userdetails } from "../../slice/setUserStateSlice";


const AddToDo = ({navigation}) => {
    const [date, setDate] = useState(new Date())
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const userID = useSelector(userdetails)


    const addTaskHandler = (date, taskDesc, taskTitle, userID) => {
        // console.log(date.toISOString())
        firebase
        .app()
        .database('https://remind-app-57e14-default-rtdb.asia-southeast1.firebasedatabase.app/')
        .ref(`/task`)
        .push({
            uid: userID,
            taskdesc: taskDesc,
            tasktitle: taskTitle,
            date: date.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})
        }).
        then(() => console.log('Data updated.'));

    }

    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollcontainer}>
            <BackButton showsVerticalScrollIndicator={false} onPress={()=>navigation.goBack()} style={styles.backbtn}/>
            <View style={styles.box}>
            <TextField 
                value={taskTitle} 
                onChangeText={(text)=>setTaskTitle(text)}
                label={"Title"} 
                style={styles.label}/>
            <Text style={styles.label}>Task</Text>
            <View style={styles.textAreaContainer}>
                <TextInput
                value={taskDesc}
                onChangeText={(text)=>setTaskDesc(text)}
                style={styles.textArea}
                placeholder="Type something"
                placeholderTextColor="grey"
                numberOfLines={7}
                multiline={true}
                />
            </View>
            <DatePicker mode="datetime" style={styles.datepicker} date={date} onDateChange={setDate} />
            </View>
            <ButtonComponent onPress={()=>{
                addTaskHandler(date, taskDesc, taskTitle, userID);

                Alert.alert(
                    "Notice",
                    "Task Successfully Added",
                    [
                      { text: "OK", onPress: () => navigation.goBack() }
                    ]
                  );
                }} marginTop={50} backgroundColor={"orange"} title={"Add Task"} />
            </ScrollView>
        </View>
    )
}

export default AddToDo;