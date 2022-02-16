import React, { useState, useEffect } from 'react';
import Login from './Components/Login/Login';
import Menu from './Components/Menu/Menu';
import Register from './Components/Register/Register';
import ToDo from './Components/ToDo/ToDo';
import AddToDo from './Components/ToDo/AddToDo/AddToDo';
import Maps from './Components/Maps/Maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();



const LoginStack = () => {



  return(
  <Stack.Navigator 
  initialRouteName='Login'
  screenOptions={{headerShown: false, gestureEnabled: false}}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register}/>
  </Stack.Navigator>
  )
}

const MenuStack = () => {
  return(
  <Stack.Navigator 
  initialRouteName='Menu'
  screenOptions={{headerShown: false, gestureEnabled: false}}
  >
    <Stack.Screen name="Menu" component={Menu}/>
      <Stack.Screen name="ToDo" component={ToDo}/>
        <Stack.Screen name="AddTodo" component={AddToDo}/>
      <Stack.Screen name="Maps" component={Maps}/>
  </Stack.Navigator>
  )
}

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [initialRoute, setInitialRoute] = useState('LoginStack')

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
    {/* // <Splash/>
    // <Login></Login>
    // <Register/>
    // <Menu></Menu> */}
    <Stack.Navigator 
    initialRouteName="LoginStack" 
    screenOptions={{
    headerShown: false, gestureEnabled: false}}
    >
      <Stack.Screen name="LoginStack" component={LoginStack}/>
      <Stack.Screen name="MenuStack" component={MenuStack} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
