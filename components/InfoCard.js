import React from 'react'

import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';


const InfoCard = (props)  => {

    
  
    

    const styles = StyleSheet.create({
        
        


      });
      
    return (
        <View style={styles.card}>
          
          <Text styles={styles.text}>{props.title}</Text>
          <Text styles={styles.text}>{props.value}</Text>
            
        </View>
       
    )
}

export default InfoCard