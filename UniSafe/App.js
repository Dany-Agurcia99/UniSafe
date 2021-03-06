import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from "./components/Loading";
import Principal from "./components/Principal";
import Login from  "./components/Login";
import InterfazGuardia from  "./components/InterfazGuardia";


const Stack = createStackNavigator();


function NavStack(){
  return (
    <Stack.Navigator initialRouteName="Login">

      <Stack.Screen 
        name="Login" 
        component={Login} 
      />

      <Stack.Screen 
        name="Principal" 
        component={Principal} 
      />

        <Stack.Screen 
        name="Loading" 
        component={Loading} 
      />

      <Stack.Screen 
        name="InterfazGuardia" 
        component={InterfazGuardia} 
      />

    </Stack.Navigator>

  )


}

export default function App() {
  /*return (
    <>
      <Login />
    </>
  );
  */
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );

}
