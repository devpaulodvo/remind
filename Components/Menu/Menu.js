import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import MenuBar from "../UI/MenuBar/MenuBar";
import { styles } from "./MenuCss";

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

const Menu = () => {
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.menuitems}>
                    <Item label={"To do"} imgpath={require('./icons/todo.png')}/>
                    <Item label={"Location"} imgpath={require('./icons/location.png')}/>
                    <Item label={"Capture"} imgpath={require('./icons/capture.png')}/>
                    <Item label={"Gallery"} imgpath={require('./icons/gallery.png')}/>
                    <Item label={"Chat"} imgpath={require('./icons/chat.png')}/>
                    <Item label={"Google Map"} imgpath={require('./icons/googlemap.png')}/>
                </View>
            </ScrollView>
            <MenuBar/>
        </View>
    )
}

export default Menu;