
import React from 'react'
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import MainCard  from './components/MainCard';
import InfoCard from './components/InfoCard';



export default function App() {


const [darkTheme, setDarkTheme] = useState(true)
const [currentTemperature, setCurrentTemperature] = useState('27')
const [location, setLocation] = useState('BR, Rio Preto')

const styles = StyleSheet.create({
 
 
  temperature: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 50,
    left: 180,
    
  },
  temperatureText: {
    color: darkTheme ?  '#e0e0e8' : 'black', 
    fontSize: 50,
  },
  refreshButton:{
    position: 'absolute',
    margin: 30,
    alignSelf: 'flex-start',
    
  },

  cardView: {
    color: darkTheme ? 'black' : 'white',
    margin: 50,
    flexDirection: 'row',
    right: 15,
    top: 40,
    left:5,
    
  },
   cityText: {
    color: '#e0e0e8',
    fontSize: 40,
    left: 150,
    marginTop: 50,

   },
   info: {
    alignItems: 'center',
    backgroundColor: darkTheme? 'rgba(46, 51, 90, 0.26)' : 'rgba(28, 27, 51, 0.26)',
    borderRadius: 20,
    width: 350,
    height: 200,
    left: 55,
    
    
   },
   infoLeft: {
    color: darkTheme ? '#e0e0e0' : 'white',
    margin:15,
    fontSize: 12,
    fontWeight: 'bold',
    right: 100,
    
   },
   infoText: {
    color: darkTheme ? '#e0e0e0' : 'white',
    margin: 15,
    fontSize: 12,
    fontWeight: 'bold',
    left: 100,
   },
  
    
   image: {
    width: 20,
    height: 80,
    left: 10,
    
    
   },


});




return(
  
  <View style={styles.container}>
   
    <ImageBackground  
           source={require('./assets/imagens/Image1.png')} 
           style={'cardView'}>
           <Text style={[styles.cityText, {fonteSize: 65}]}>Montreal</Text>
           

      
          <TouchableOpacity style={styles.refreshButton}>
          <EvilIcons name="refresh" size={30} color={darkTheme ? 'white' : 'black'}/>
          </TouchableOpacity>
          <View style={styles.temperature}>
          
            <Text style={styles.temperatureText}>{currentTemperature}</Text>
            <Text style={[styles.temperatureText, {fonteSize: 14}]}>°C</Text>
          </View>

          <View style={styles.image}>
               <Image source={ require ('./assets/imagens/House.png') }
            style= {'image'}/>
            </View>

          <View style={styles.cardView}>
            <MainCard title={'Manhã'} backgroundColor={darkTheme ? '#5936B4' : '#362A84'} temperature={'24°C'}icon={'morning'}></MainCard>
            <MainCard title={'Manhã'} backgroundColor={darkTheme ? '#5936B4' : '#362A84'} temperature={'21°C'}icon={'morning'}></MainCard>
            <MainCard title={'Tarde'} backgroundColor={darkTheme ? '#5936B4' : '#362A84'} temperature={'28°C'}icon={'afternoon'}></MainCard>
            <MainCard title={'Tarde'} backgroundColor={darkTheme ? '#5936B4' : '#362A84'} temperature={'34°C'}icon={'afternoon'}></MainCard>
            <MainCard title={'Noite'} backgroundColor={darkTheme ? '#5936B4' : '#362A84'} temperature={'30°C'}icon={'nigth'}></MainCard>
            <MainCard title={'Noite'} backgroundColor={darkTheme ? '#5936B4' : '#362A84'} temperature={'24°C'}icon={'nigth'}></MainCard>
         </View>
        
         <View>
         
         </View>
            <View style={styles.info}>
                <Text style={styles.infoLeft}>informações Adicionais</Text>
                <Text style={styles.infoText}>informações Adicionais</Text>
                <View style={styles.infoCard}></View>
                <InfoCard title={'wind'} value={'65Km/h'}></InfoCard>
                <InfoCard title={'wind'} value={'65Km/h'}></InfoCard>
                <InfoCard title={'wind'} value={'65Km/h'}></InfoCard>
                <InfoCard title={'wind'} value={'65Km/h'}></InfoCard>
                
            </View>
           
             <View styles={styles.icon}>
              
             </View>
           
           
           </ImageBackground>
    </View>
      
);
}
  