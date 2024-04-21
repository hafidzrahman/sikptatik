import {View, Image, Text, StyleSheet, TextInput, ScrollView} from 'react-native';

import React, {useState, useEffect} from 'react';
import TableData from './TableData';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function() {
    const [searchValue, setSearchValue] = useState("")

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

    
    return <ScrollView>
    <View style={style.relative}>
    <Image style={style.image} source={require('./../assets/768.jpg')}/>
    </View>
    <View style={style.contentContainer}>

    <View style={style.test}>
    <View style={style.titleWrapper}>
            <Image style={style.titleIcon} source={require('./../assets/user-black.png')} />
            <Text style={style.title}>Daftar Mahasiswa</Text>
            </View>
            <View style={style.utility}>
            <View style={style.searchWrapper}>
                <Image style={style.searchIcon} source={require('./../assets/search.png')}/>
                <TextInput style={style.input} defaultValue={searchValue} onChangeText={newText => setSearchValue(newText)}/>
            </View>
            <View style={style.sort}>
                <Image style={style.searchIcon} source={require('./../assets/sort.png')} />
                <Text style={style.sortText}>Sort</Text>
            </View>
            </View>
    </View>
    {data && data.accountData.b_kp.filter(d => d.nama.includes(searchValue)).map((d, i) => <TableData {...d} key={i}/>)}
    </View>
    </ScrollView>
}

const style = StyleSheet.create({
    sort : {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5
    },
    sortText : {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18
    },
    utility : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3'
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
      header : {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 16,
        borderBottomWidth: 1
    }, 
    title : {
        fontSize: 18,
        fontFamily: 'Poppins-Bold'
    },
    titleIcon : {
        width: 25,
        height: 25,
        marginTop: -8,
        marginRight: 5
    },
    titleWrapper : {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3'
    },
    searchIcon : {
        width: 25,
        height: 25,
        marginRight: 5
    },
    searchWrapper : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        flex: 1,
        padding: 5,
        borderColor: '#0085FF',
        borderRadius: 10,
        backgroundColor: 'white'
    },
    input : {
        paddingTop: 1,
        flex: 1
    },
})