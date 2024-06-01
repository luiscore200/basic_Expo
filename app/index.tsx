import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, Alert } from 'react-native';
import ButtonGradient from '../button';
import  Svg,{Defs,Path,LinearGradient,Stop}  from 'react-native-svg';
import { router } from 'expo-router';
import { login as loginApi} from '../services/api';
import { saveLocalStorage } from '../services/auth';
import { useAuth } from '../services/authContext2';




export default function index() {

  const {login}=useAuth();
  const handleLogin = async () => {
  
    try {
      const data = await loginApi(email, password);
      console.log(data);
    const a=  await login(data);
    console.log(a);
        router.navigate({
          pathname:"/[token]",
          params:{token:data.access_token},
        });


    } catch (error:any) {
      console.log(error.message);
      alert(error.message);

    }
      //await saveLocalStorage(data);
    

      
    /*  router.navigate({
          pathname: '/[token]',
          params: { token: data.access_token },
        });
      */
    
   
  };


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

  
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
   

  return (
<View style={styles.MainContainer}>
    <View style={styles.SVGcontainer}>
    <SvgTOP/>
    </View>
    <View style={styles.container}>
      
      <Text style={styles.tittle}>Hello</Text>
      <Text style={styles.subtittle}>Sign in to your account</Text>
      <TextInput 
          style={styles.TextInput} 
          placeholder='user@user.com'
          onChangeText={setEmail}>

      </TextInput>
      <TextInput
     
          style={styles.TextInput} 
          placeholder='password'
          secureTextEntry={true}
          onChangeText={setPassword}> 
      </TextInput>
      
      <Text style={styles.Text}>forgot your password?</Text>
     <ButtonGradient  onPress={handleLogin}  />
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
