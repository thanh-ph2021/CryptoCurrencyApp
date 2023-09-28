import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs';
import Transaction from '../screens/Transaction';
import CryptoDetail from '../screens/CryptoDetail';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const App = () => {

    React.useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='Overview'
            >
                <Stack.Screen 
                    name="Overview"
                    component={Tabs}
                />
                <Stack.Screen 
                    name="CryptoDetail"
                    component={CryptoDetail}
                />
                <Stack.Screen 
                    name="Transaction"
                    component={Transaction}
                />
            </Stack.Navigator>
        </NavigationContainer>
      );
}

export default App;