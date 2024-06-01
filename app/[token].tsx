import { useLocalSearchParams,router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, Button, Alert } from 'react-native';
import  Svg,{Defs,Path,LinearGradient,Stop}  from 'react-native-svg';

import { useAuth } from '../services/authContext2';

const tokenPage = () =>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {logout}=useAuth();

    const {token} = useLocalSearchParams<{token:string}>();
    
    async function salir(){
        await logout();
    }
  

    function SvgTOP(){
        return(
          <Svg width="400" height="250" viewBox="0 0 400 250">
          <Defs>
            <LinearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor="#FFB677" stopOpacity="1" />
              <Stop offset="100%" stopColor="#FF3CBD" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          {/* Fondo más claro con onda tipo seno */}
          <Path
            d="M 0 0 H 400 V 200 Q 300 150 200 200 Q 100 250 0 200 Z"
            fill="#ffe4e1"
          />
          {/* Cuadrado principal con onda tipo coseno con gradiente */}
          <Path
            d="M 0 0 H 400 V 200 Q 300 250 200 200 Q 100 150 0 200 Z"
            fill="url(#grad1)"
          />
        </Svg>
        )
      }
    
     
      
      
      
    
      return (
    <View style={styles.MainContainer}>
        <View style={styles.SVGcontainer}>
        <SvgTOP/>
        </View>
        <View style={styles.container}>
          
          <Text style={styles.subtittle}>your token: {token}</Text>
          <Button title="Sign Out" onPress={salir} />
        
          <StatusBar style="auto" />
        </View>
      
    </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
    
       
        alignItems: 'center',
        justifyContent: 'center',
      },
      SVGcontainer:{
         width:'100%',
         justifyContent:'flex-start',
         alignItems:'center',
      },
      MainContainer:{
        backgroundColor: '#f1f1f1',
        flex:1,
    
      },
    
      tittle: {
        fontSize:60,
        color:'#34434D',
        fontWeight:'bold',
      },
      subtittle: {
        fontSize:20,
        maxWidth:'80%',
        color:'gray',
      },
      TextInput:{
        borderWidth:1,
        borderColor:'gray',
        padding:10,
        borderRadius:30,
        marginTop:10,
        width:'80%',
        height:50,
        backgroundColor:'#fff',
        paddingStart:30,
      },
      Text:{
        marginTop:20,
        
      }
    });
    
export default tokenPage;
