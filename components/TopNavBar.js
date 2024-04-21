import {View, Text, StyleSheet, Image} from 'react-native';
import {BlurView} from 'expo-blur';

export default function({title, logOut, setIsLogin, fontSize, color}) {

    function handleOnClickLogOut() {
        setIsLogin(undefined);
    }

    return <BlurView style={style.navbar} intensity={70} tint='dark'>
        <Text style={[style.title, {fontSize, color}]}>{title}</Text>
        {logOut && <Text style={style.logOut} onPress={handleOnClickLogOut}>
            <Image style={style.image} source={require('../assets/logout.png')}/>
            <Text style={style.hidden}>a</Text>
            <Text style={style.text}>Log Out</Text>
        </Text>}
    </BlurView>
}

const style = StyleSheet.create({
    navbar : {
    height: 70,
    paddingTop : 7,
    paddingLeft : 21,
    top: 0,
    left : 0,
    right: 0,
    position: 'absolute',
    zIndex: 999,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    },
    logOut : {
        alignItems: 'center',
        paddingLeft: 11,
        paddingRight: 3,
        backgroundColor: '#FF5555',
        borderRadius: 20,
        flex: 3,
        marginRight: 10,
        paddingBottom: 5
    },

    title : {
        fontFamily: 'Poppins-ExtraBold',
        flex: 11
    },
    
    image : {
        height: 20,
        width: 20,
    },
    text : {
        flex: 1,
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 10,
    },
    hidden : {
        color: 'transparent'
    }
})