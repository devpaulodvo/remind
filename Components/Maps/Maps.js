import React, { useState, useRef } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
} from "react-native";
import BackButton from "../UI/BackButton/BackButton";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const Maps = ({navigation}) => {
    const GOOGLE_MAPS_APIKEY = 'AIzaSyA1NO5EQe6oa2dPtWPyCbdcH5smjArIqTk';

    const mapView = useRef(null)
    const { width, height } = Dimensions.get('window');

    const [locationString, setLocationString] = useState("");

    const [coordsOrigin, setCoordsOrigin] = useState(
        {latitude: 37.3318456, longitude: -122.0296002}
    )
    const [coordsDest, setCoordsDest] = useState(
        {latitude: 37.771707, longitude: -122.4053769},
    )
    
    return(
        
        <View style={styles.container}>
            <BackButton showsVerticalScrollIndicator={false} onPress={()=>navigation.goBack()} style={styles.backbtn}/>

            <Text>{locationString}</Text>
            <MapView
                ref={mapView}
                provider={PROVIDER_GOOGLE}
                style={styles.mapcontainer}
                initialRegion={{
                latitude: coordsOrigin.latitude,//longlat.lat,
                longitude: coordsOrigin.longitude, //longlat.long,
                latitudeDelta: 0.1322,
                longitudeDelta: 0.1321,
                }}
                // onPoiClick={(e)=>{
                //     console.log(e)
                //     setLongLat({long: e.nativeEvent.coordinate.longitude, lat: e.nativeEvent.coordinate.latitude})
                //     setLocationString(e.nativeEvent.name)
                // }}
                onPress={(e) => {
                    setCoordsDest({latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude})
                    setLocationString(e.nativeEvent.name)
                }}
            >
                <Marker coordinate={coordsOrigin} 
                onDragEnd={(e) => setCoordsOrigin({latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude})}
                draggable>
                    <Image
                        source={require('./car.png')}
                        style={{width: 50, height: 50}}
                        resizeMethod="resize"
                    />
                </Marker>

                <Marker coordinate={coordsDest} 
                onDragEnd={(e) => setCoordsDest({latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude})}
                draggable/>

                <MapViewDirections
                origin={coordsOrigin}
                // waypoints={ (coords.length > 2) ? coords.slice(1, -1): undefined}
                destination={coordsDest}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="hotpink"
                onReady={result => {
                    console.log(`Distance: ${result.distance} km`)
                    console.log(`Duration: ${result.duration} min.`)
                    mapView.current.fitToCoordinates(result.coordinates, {
                      edgePadding: {
                        right: (width / 5),
                        bottom: (height / 5),
                        left: (width / 5),
                        top: (height / 5),
                      }
                    });
                }}
                >
                </MapViewDirections>
                
            </MapView>
        </View>
    )
}


const styles = StyleSheet.create({
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    container: {
        flex: 1,
        paddingTop: 40,
    },
    mapcontainer: {
        width: '100%',
        height: 658
    },
    backbtn:{
        marginTop: 20,
        marginLeft: 20,
    }
});

export default Maps;