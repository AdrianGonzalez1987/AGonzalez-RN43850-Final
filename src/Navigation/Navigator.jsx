
import {SafeAreaView, StyleSheet, View } from 'react-native'
import React,{ useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { StatusBar } from 'react-native'
import { colors } from '../Global/Colors'

import {Platform } from 'react-native-web'
import AuthStack from './AuthStack'
import { useSelector, useDispatch } from 'react-redux'
import { getSession } from "../SQLite";
import { setUser } from "../Features/User/userSlice";
import TabNavigator from './TabNavigator'







const Navigator = () => {

    const { email} = useSelector((state) => state.userReducer.value);
    
    const dispatch = useDispatch()

    //Get stored sessions
    useEffect(()=> {
        (async ()=> {
            try {
                console.log('Getting session...');
                const session = await getSession()
               
                if (session?.rows.length) {
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            } catch (error) {
               
            }
        })()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                {email ? (
                   <TabNavigator/>
                ) : (
                    <AuthStack />
                )}
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default Navigator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    contNAvi: {
        backgroundColor: colors.beige
    },
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