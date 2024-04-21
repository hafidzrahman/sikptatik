import {Text, Image, StyleSheet, ScrollView, View, Button} from 'react-native'
import {useState, useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeContent from './HomeContent';
import AnnouncementCard from './AnnouncementCard';
import HistoryCard from './HistoryCard';
import NotificationCard from './NotificationCard';

export default function() {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async function() {
            const gettingData = await AsyncStorage.getItem('selectedAccount');
            const announcement = await AsyncStorage.getItem('announcement');
            const accountData = JSON.parse(gettingData);
            const announcementData = JSON.parse(announcement)
            setData({accountData, announcementData});
        })();
    },[])
    return <>
    <ScrollView>
        <View style={style.relative}>
        <Image style={style.image} source={require('./../assets/768.jpg')}/>
        <View style={style.welcome}>
            <View style={style.redbox}></View>
            <View style={style.textContainer}>
                <Text style={style.text}>SELAMAT DATANG</Text>
                <Text style={style.name}>Olav Thomas</Text>
            </View>
        </View>
        </View>
        <View style={style.contentContainer}>
        
        <HomeContent title="Pengumuman" data={data && data.announcementData} Card={AnnouncementCard}/>
        <HomeContent title="History" data={data && data.accountData.history} Card={HistoryCard}/>
        <HomeContent title="Notification" data={data && data.accountData.notification} Card={NotificationCard}/>
        
        
        </View>
        </ScrollView>
    </>
}

const style = StyleSheet.create({
    textContainer : {
        marginLeft: 10
    },
    name : {
        fontSize: 20,
        fontFamily: "Poppins-Bold",
        color : '#05FFFF',
        lineHeight: 25
    },
    redbox : {
        width: 5,
        height: '80%',
        backgroundColor: '#D20000'
    },
    welcome : {
        paddingLeft: 34,
        width: '100%',
        height: 90,
        position : 'absolute',
        bottom: 44,
        backgroundColor: 'rgba(0,0,0,0.49)',
        flexDirection: 'row',
        alignItems: 'center'
    },
    relative : {
        position: 'relative',
        flex: 1
    },
    image : {
      width: '100%',
      height: 400,
      resizeMode: "stretch",
    },
    contentContainer : {
        flex: 1,
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
        fontFamily: 'Poppins-ExtraBold',
        color: 'white'
      }
})