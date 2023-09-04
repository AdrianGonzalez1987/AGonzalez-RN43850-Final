
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from '../Global/Colors'
import { StyleSheet, View } from 'react-native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrderStack from './OrderStack'
import MyProfileStack from './MyProfileStack'
import { Fontisto, FontAwesome5, Ionicons, Foundation   } from '@expo/vector-icons'


const Tab = createBottomTabNavigator()
const TabNavigator = () => {
    return (
        <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
    }}
>
    <Tab.Screen
        name="Shop"
        component={ShopStack}
        options={{
            tabBarIcon: ({ focused }) => {
                return (
                    <View>
                        <Fontisto
                            name="shopping-store"
                            size={24}
                            color={
                                focused ? "black" : "gray"
                            }
                        />
                    </View>
                );
            },
        }}
    />
    <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
            tabBarIcon: ({ focused }) => {
                return (
                    <View>
                        <Foundation
                            name="shopping-cart"
                            size={30}
                            color={
                                focused ? "black" : "gray"
                            }
                        />
                    </View>
                );
            },
        }}
    />
    <Tab.Screen
        name="Orders"
        component={OrderStack}
        options={{
            tabBarIcon: ({ focused }) => {
                return (
                    <View>
                        <FontAwesome5
                            name="list-ul"
                            size={24}
                            color={
                                focused ? "black" : "gray"
                            }
                        />
                    </View>
                );
            },
        }}
    />
    <Tab.Screen
        name="MyProfile"
        component={MyProfileStack}
        options={{
            tabBarIcon: ({ focused }) => {
                return (
                    <View style={styles.item}>
                        <Ionicons
                            name="person-circle-outline"
                            size={24}
                            color={
                                focused ? "black" : "gray"
                            }
                        />
                    </View>
                );
            },
        }}
    />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({

    tabBar:{
        
        backgroundColor: colors.orange,
        shadowColor: 'black',
        elevation: 3,
        position: 'absolute',
        buttom: 30,
        left: 20,
        right:20,
        borderRadius:15,
        height:90,
        marginBottom:7
    }
})