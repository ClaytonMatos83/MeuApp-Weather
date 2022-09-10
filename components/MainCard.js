import React from 'react'
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {Fontisto } from '@expo/vector-icons';

const MainCard = (props)  => {

    const Icon = () => {
        if (props.icon === 'morning'){
            return(
                <Feather name='sun' style={styles.card.Icon} size={40} color="orange" />
            )
        }
        
        if (props.icon === 'afternoon'){
            return(
                <Fontisto style={styles.card.Icon} name= 'day-cloudy' size={24} color= 'white' />
            )
        }
        
        if (props.icon === 'nigth'){
            return(
                <Feather name='cloud-rain' style={styles.card.Icon} size={40} color="orange" />
            )
        }
        
    }
    

    const styles = StyleSheet.create({
        
        card: {
         backgroundColor: props.backgroundColor,
         justifyContent: 'center',
         alignItems: 'center',
       
         margin: 5,
         width:  50,
         height: 150,
         borderRadius: 50,
         
        },
        refreshButton:{
          position: 'absolute',
          margin: 50,
          alignSelf: 'flex-start',
        },

        
         text:{
            color:'white',
            margin: 5,
            fontSize: 12.5,
         },

        cardIcon: {
            color: 'withe',
            margin:15,
        },


      });
      
    return (
        <View style={styles.card}>
          
            <Text style={styles.text}>{props.title}</Text>
             <Icon></Icon>
            <Text style={styles.text}>{props.temperature}</Text>
            
        </View>
       
    )
}

export default MainCard