import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shop from "./screens/Shop";
import Login from "./screens/login";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="login">
      <Stack.Screen name="login" component={ Login} />
      <Stack.Screen name="Shop" component={Shop} options={{
            headerShown: false,
          }} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;