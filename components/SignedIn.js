import {Text} from 'react-native';
import { useState, useEffect } from 'react';
import TopNavBar from './TopNavBar';
import Home from './Home.js';
import Dashboard from './Dashboard.js'
import InputBimbinganKerjaPraktek from './InputBimbinganKerjaPraktek.js';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function({setIsLogin}) {
    const [currentContent, setCurrentContent] = useState();
    
    
    const fontConfig = {
        title : "SIKPTATIK",
        fontSize : 26,
        color : '#00C2FF'
    }

    const content = <InputBimbinganKerjaPraktek />

    if (currentContent === 'DASHBOARD') {
        content = <Dashboard />
        fontConfig = {
            title : currentContent,
            fontSize: 26,
            color: 'white'
        }
    }


    return <>
    <TopNavBar {...fontConfig} logOut={true} setIsLogin={setIsLogin}/>
    {content}
    </>
}