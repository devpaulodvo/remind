import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import BackButton from "../../UI/BackButton/BackButton";

const AddToDo = ({navigation}) => {
    return(
        <View style={styles.container}>
            <BackButton onPress={()=>navigation.goBack()} style={styles.backbtn}/>
            <ScrollView style={styles.scrollcontainer}>
                
            </ScrollView>
            <MenuBar/>
        </View>
    )
}

export default AddToDo;