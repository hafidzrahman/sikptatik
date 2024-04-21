import {View, Text, Image, StyleSheet, TouchableHighlight, TextInput, Button} from 'react-native';

import React, {useState} from 'react';

export default function({title, data, Card}) {
    const [searchIsClicked, setSearchIsClicked] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [showMore, setShowMore] = useState(false);
    let icon = require('./../assets/megaphone.png');
    let items = data;
    
    if (!showMore && data) {
        items = [data[0], data[1], data[2]];
    }

    if (title === 'History') {
        icon = require('./../assets/history.png')
    } else if (title === "Notification") {
        icon = require('./../assets/bell.png')
    }

    function handleOnPressSearch() {
        setSearchIsClicked(prev => !prev);
    }

    function handleOnShowMore() {
        setShowMore(prev => !prev)
    }

    return <View style={style.homeContentWrapper}>
        <View style={style.header}>
            <View style={style.titleWrapper}>
            <Image style={style.titleIcon} source={icon} />
            <Text style={style.title}>{title}</Text>
            </View>
            <View style={style.searchWrapper}>
                <View style={style.inputWrapper}>
                {searchIsClicked && <TextInput style={style.input} defaultValue={searchValue} onChangeText={newText => setSearchValue(newText)}/>}
                </View>
                <TouchableHighlight onPress={handleOnPressSearch}>
                <Image style={style.searchIcon} source={require('./../assets/search.png')}/>
                </TouchableHighlight>
            </View>
        </View>
        {items && items.filter(d => d.title.includes(searchValue)).map((d,i) => <Card {...d} key={i}/>)}
        <TouchableHighlight onPress={handleOnShowMore}>
        <View style={style.showMore}>
            <Text style={style.buttonText}>show more</Text>
            </View>
            </TouchableHighlight>
    </View>
}


const style = StyleSheet.create({
    homeContentWrapper : {
        marginBottom: 30
    },
    header : {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        marginTop: -10,
        marginRight: 5
    },
    titleWrapper : {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    searchWrapper : {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
        
    },
    searchIcon : {
        width: 25,
        height: 25
    },
    inputWrapper : {
        flex: 1
    },
    input : {
        borderBottomWidth: 1,
        paddingTop: 1
    },
    showMore : {
        backgroundColor: '#118DFF',
        paddingTop: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText : {
        color: 'white',
        fontFamily: 'Poppins-Medium',
        fontSize: 15
    }
})