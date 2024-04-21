import {View, Image, Text, StyleSheet} from 'react-native';

export default function() {
    return <>
    <View style={style.relative}>
    <Image style={style.image} source={require('./../assets/768.jpg')}/>
    </View>
    <View style={style.contentContainer}>
    
    <View style={style.relative}>
    <Image style={style.imageContent} source={require('./../assets/768.jpg')}/>
    <View style={style.welcomeContent}>
        <View style={style.redbox}></View>
        <View style={style.textContainer}>
            <Text style={style.text}>BIMBINGAN TUGAS AKHIR</Text>
        </View>
    </View>
    </View>

    <View style={style.relative}>
    <Image style={style.imageContent1} source={require('./../assets/768.jpg')}/>
    <View style={style.welcomeContent1}>
        <View style={style.redbox}></View>
        <View style={style.textContainer}>
            <Text style={style.text}>SEMINAR TUGAS AKHIR</Text>
        </View>
    </View>
    </View>

    

    
    

    </View>
    </>
}

const style = StyleSheet.create({
    textContainer : {
        marginLeft: 10
    },
    redbox : {
        width: 5,
        height: '80%',
        backgroundColor: '#D20000'
    },
    welcomeContent : {
        paddingLeft: 25,
        width: '100%',
        height: 50,
        position : 'absolute',
        bottom: 35,
        backgroundColor: 'rgba(0,0,0,0.49)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    welcomeContent1 : {
        paddingLeft: 25,
        width: '100%',
        height: 50,
        position : 'absolute',
        bottom: 35,
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
    imageContent : {
        width: '100%',
      height: 180,
      resizeMode: "stretch",
      borderRadius: 20
    },
    imageContent1 : {
        width: '100%',
      height: 180,
      resizeMode: "stretch",
      borderRadius: 20
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
        fontSize: 17,
        fontFamily: 'Poppins-ExtraBold',
        color: 'white'
      }
})