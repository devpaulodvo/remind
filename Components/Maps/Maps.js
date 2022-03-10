import React, { useState, useRef, useEffect } from "react";
import { API_GOOGLE_MAPS_KEY } from '@env';
import { View, Text, StyleSheet, Dimensions, Image,} from "react-native";
import Geolocation from 'react-native-geolocation-service';
import BackButton from "../UI/BackButton/BackButton";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useSelector, useDispatch } from 'react-redux'
import { setOriginReducer, setDestReducer, coordsO, coordsD } from '../slice/setOriginDest'

const Maps = ({navigation}) => {
    const dispatch = useDispatch();
    const GOOGLE_MAPS_APIKEY = API_GOOGLE_MAPS_KEY;
    const [distance, setDistance] = useState(0);
    const mapView = useRef(null)
    const { width, height } = Dimensions.get('window');
    const [locationString, setLocationString] = useState("");
    
    const coordsOrigin = useSelector(coordsO)
    const coordsDest = useSelector(coordsD)

    Geolocation.watchPosition(
        (position) => {
            console.log(position)
            dispatch(setOriginReducer({latitude:position.coords.latitude, longitude:position.coords.longitude}));
        },
        (error) => {
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );

    useEffect(()=>{
        //use Geolocation to constantly update your location??
    },[])
    
    return(
        <View style={styles.container}>
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
                onPoiClick={(e)=>{
                    dispatch(setDestReducer({latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude}))
                    setLocationString(e.nativeEvent.name)
                }}
                onPress={(e) => {
                    dispatch(setDestReducer({latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude}))
                    console.log(coordsDest)
                    setLocationString(e.nativeEvent.name)
                }}
            >
                <Marker coordinate={coordsOrigin} 
                onDragEnd={
                    (e) => dispatch(setOriginReducer({latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude}))
                }
                >
                    <Image
                        source={require('./parking.png')}
                        style={{width: 50, height: 50}}
                        resizeMethod="resize"
                    />
                </Marker>

                {distance !== 0 ? <Marker coordinate={coordsDest} 
                onDragEnd={
                    (e) => dispatch(setDestReducer({latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude}))
                }
                draggable/>
                :
                <></>
                }
                <MapViewDirections
                origin={coordsOrigin}
                // waypoints={ (coords.length > 2) ? coords.slice(1, -1): undefined}
                destination={coordsDest}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="hotpink"
                onReady={result => {
                    setDistance(result.distance)
                    if(result.distance !== 0){
                        mapView.current.fitToCoordinates(result.coordinates, {
                            edgePadding: {
                              right: (width / 5),
                              bottom: (height / 5),
                              left: (width / 5),
                              top: (height / 5),
                            }
                        });
                    }else{

                    }
                }}
                >
                </MapViewDirections>
                
            </MapView>
            <BackButton showsVerticalScrollIndicator={false} onPress={()=>navigation.goBack()} style={styles.backbtn}/>

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
    },
    mapcontainer: {
        width: '100%',
        flex: 1
    },
    backbtn:{
        marginLeft: 20,
        bottom: 750,
        position: 'absolute',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
});

export default Maps;