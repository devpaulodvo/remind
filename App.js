import React from 'react';
import Login from './Components/Login/Login';
import Menu from './Components/Menu/Menu';
import Register from './Components/Register/Register';
import Splash from './Components/Splash/Splash';
import ToDo from './Components/ToDo/ToDo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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
  </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
    {/* // <Splash/>
    // <Login></Login>
    // <Register/>
    // <Menu></Menu> */}
    <Stack.Navigator 
    initialRouteName="LoginStack" 
    screenOptions={{
    headerShown: false}}
    >
      <Stack.Screen name="LoginStack" component={LoginStack} />
      <Stack.Screen name="MenuStack" component={MenuStack} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
