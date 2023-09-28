import * as React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { COLORS, FONTS } from '../constants';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import icons from '../constants/icons';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({children, onPress}: any) => {
    return (
        <TouchableOpacity 
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 8,
            }}
            onPress={onPress}
        >
            <LinearGradient
                colors={[COLORS.primary, COLORS.secondary]}
                style={{
                    width: 45,
                    height: 45,
                    borderRadius: 35
                }}
            >
                {children}
            </LinearGradient>
        </TouchableOpacity>
    )
}

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopColor: "transparent",
                    height: 50
                },
                headerShown: false
            }}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={icons.home}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.primary : COLORS.black, ...FONTS.body5 }}>HOME</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Portfolio"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={icons.pie_chart}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.primary : COLORS.black, ...FONTS.body5 }}>PORTFOLIO</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Transaction"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={icons.transaction}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: COLORS.white
                                }}
                            />
                        </View>
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Prices"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={icons.line_graph}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.primary : COLORS.black, ...FONTS.body5 }}>PRICES</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Settings"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={icons.settings}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.primary : COLORS.black, ...FONTS.body5 }}>SETTINGS</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;