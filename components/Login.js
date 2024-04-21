import {View, Text, Image, StyleSheet, Button} from 'react-native';
import ImageData from '../assets/icon.png';
import LoginInput from './LoginInput.js';
import CheckBox from 'expo-checkbox';
import {data} from '../data.js';
import AsyncStorage from '@react-native-async-storage/async-storage'

import announcement from './../announcement.json'

import React, {useRef, useState} from 'react';

export default function({setIsLogin}) {
  const [toggle, setToggle] = useState(false);
  const typedNIP = useRef();
  const typedPassword = useRef();

  async function handleOnClick() {
    // const selectedAccount = data.find(account => account.NIP === typedNIP.current && account.password === typedPassword.current)
    const selectedAccount = data[0];
    if (selectedAccount) {
    const jsonValue = JSON.stringify(selectedAccount)
    const announcementJsonValue = JSON.stringify(announcement)
    await AsyncStorage.setItem('selectedAccount', jsonValue);
    await AsyncStorage.setItem('announcement', announcementJsonValue)
    setIsLogin(true);
    }
  }


    return <>
    <Image style={style.image} source={require('./../assets/768.jpg')}/>
    <View style={style.inputContainer}>
    <Text style={style.title}>Hello There 🖐</Text>
      <Text style={style.text}>
      <Text>Please Sign In with your </Text>
      <Text style={style.hightlight}>Username </Text>
      <Text>and </Text>
      <Text style={style.hightlight}>Password </Text>
      <Text>to Continue</Text>
      </Text>
      <LoginInput ref={typedNIP} title="NIP :" password={false}/>
      <LoginInput ref={typedPassword} title="Password :" password={true}/>
      <View style={style.checkboxWrapper}>
      <CheckBox value={toggle} onValueChange={setToggle}/>
      <Text style={style.checkboxText} onPress={() => setToggle(prev => !prev)}>Remember Me</Text>
      </View>
      <View style={style.button}>
      <Button title="Log In" onPress={handleOnClick} color="#118DFF"/>
      </View>
    </View>
    </>
}

const style = StyleSheet.create({
    image : {
      flex: 2,
      width: '100%',
      resizeMode: "stretch",
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
    },
    inputContainer : {
      flex: 3,
      paddingTop: 20,
      paddingLeft: 14,
      paddingRight: 14
    }, 
    title : {
      fontSize: 30,
      fontFamily: "Poppins-Bold",
    },
    text : {
      fontSize: 20,
      fontFamily: 'Poppins-ExtraLight',
    },
    hightlight : {
      fontSize: 21,
      fontFamily: 'Poppins-Regular'
    },
    checkboxWrapper : {
      marginTop: 20,
      marginBottom : 30,
      flexDirection: 'row',
      alignItems : 'center',
    },
    checkboxText : {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      color: '#0094FF',
      marginLeft: 12,
      paddingTop : 3
    }, 
    button : {
      borderRadius: 10,
      overflow: 'hidden'
    }
  })