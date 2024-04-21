import React, {useCallback, useState} from 'react';
import {View} from 'react-native';

import Login from './components/Login.js';
import SignedIn from './components/SignedIn.js'
import TopNavBar from './components/TopNavBar.js';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [fontsLoaded, fontsError] = useFonts({
    'Poppins-ExtraBold' : require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Bold' : require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold' : require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium' : require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Black' : require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-Regular' : require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light' : require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-ExtraLight' : require('./assets/fonts/Poppins-ExtraLight.ttf'),
  })



  const onLayoutRootView = useCallback(async() => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }
  

  let content = <SignedIn setIsLogin={setIsLogin}/>

  if (!isLogin) {
    content = <>
    <TopNavBar title="SIKPTATIK" fontSize={26} color='#00C2FF' logOut={false}/>
    <Login setIsLogin={setIsLogin}/>
    </>
  }


  
  
  return <View onLayout={onLayoutRootView} style={{flex: 1, backgroundColor: '#E4F2FF'}}>
    {content}
  </View>

}

