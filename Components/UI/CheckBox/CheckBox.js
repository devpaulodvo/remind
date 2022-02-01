import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CheckBox = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    return(
        <TouchableOpacity onPress={()=>setIsChecked(!isChecked)} title={"asda"} style={[styles.buttonUnchckd, props.style]}>
            {/* {!isChecked ? <View/>:<View/>} */}
            <View style={isChecked?styles.checked:null}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonUnchckd:{
        width:34,
        height:34,
        backgroundColor: 'white',
        borderWidth:1,
        borderColor: '#080E3C',
        borderRadius: 8,
        justifyContent: "center",
    },
    checked:{
        width:25,
        height:25,
        backgroundColor: "#4b21d1",
        alignSelf:"center",
        borderRadius: 6,
    },
})


export default CheckBox;