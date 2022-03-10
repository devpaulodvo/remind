import React, { useEffect } from "react";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import Geolocation from 'react-native-geolocation-service';
import MenuBar from "../UI/MenuBar/MenuBar";
import { styles } from "./MenuCss";
import { useSelector, useDispatch } from 'react-redux'
import { setUserReducer } from '../slice/setUserStateSlice';
import { setOriginReducer, setDestReducer, coordsD, coordsO } from '../slice/setOriginDest'

const Item = ({ label, imgpath, onPress }) => {
    return(
        <View style={styles.item}>
            <TouchableOpacity onPress={onPress} activeOpacity={1}>
                <Text style={styles.itemtext}>{label}</Text>
                <Image source={imgpath}/>
            </TouchableOpacity>
        </View>
    )
}

const Menu = ({navigation}) => {
    const dispatch = useDispatch()
    const dest = useSelector(coordsD)
    const or = useSelector(coordsO)

    Geolocation.getCurrentPosition(
        (position) => {
            dispatch(setOriginReducer({latitude:position.coords.latitude, longitude:position.coords.longitude}));
            if(dest === null){
                dispatch(setDestReducer({latitude:position.coords.latitude, longitude:position.coords.longitude}));
            }
        },
        (error) => {
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.menuitems}>
                    <Item label={"To do"} imgpath={require('./icons/todo.png')}
                    onPress={() => navigation.push('ToDo')}
                    />
                    <Item label={"Location"} imgpath={require('./icons/location.png')}/>
                    <Item label={"Capture"} imgpath={require('./icons/capture.png')}/>
                    <Item label={"Gallery"} imgpath={require('./icons/gallery.png')}/>
                    <Item label={"Chat"} imgpath={require('./icons/chat.png')}/>
                    <Item label={"Google Map"} imgpath={require('./icons/googlemap.png')}
                    onPress={() => {
                        navigation.push('Maps')
                    }}
                    />
                </View>
            </ScrollView>
            <MenuBar navigation={navigation}/>
        </View>
    )
}

export default Menu;