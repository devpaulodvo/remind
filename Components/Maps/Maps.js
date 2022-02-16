import React from "react";
import { 
    View,
    StyleSheet
} from "react-native";
import BackButton from "../UI/BackButton/BackButton";
import MapView from 'react-native-maps';

const Maps = ({navigation}) => {

    return(
        <View style={styles.container}>
            <BackButton showsVerticalScrollIndicator={false} onPress={()=>navigation.goBack()} style={styles.backbtn}/>
            <MapView
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            />
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        paddingTop: 40,
    },
    backbtn:{
        marginTop: 20,
        marginLeft: 20,
    }
});

export default Maps;