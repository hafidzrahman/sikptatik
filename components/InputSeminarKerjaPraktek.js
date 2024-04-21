import {View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableHighlight} from 'react-native';
import {useState} from 'react'

export default function() {
    const [isValue, setIsValue] = useState(false);

    let content = <View>
        <Text>Judul</Text>
        <Text>Analisis Penggunaan Lorem Ipsum dalam kehidupan sehari-hari</Text>
        <Text>Nama</Text>
        <Text>Olav Thomas</Text>
        <Text>NIM</Text>
        <Text>312412421421</Text>
        <Text>Pembimbing</Text>
        <Text>Thomas Olav</Text>
        <Text>Jadwal</Text>
        <Text>6 April 2022 | 06.39-11.29 | GB. 203</Text>
        <Text>Contact</Text>
        <Text>Phone : 0843-2423-2432</Text>
        <Text>Email : OlavThomas@gmail.com</Text>
    </View>

    if (isValue) {
        content = <View>
            <View style={style.inputWrapper}>
            <Text>Sikap</Text>
            <TextInput style={style.input}/>
            </View>
            <View style={style.inputWrapper}>
            <Text>Penguasaan materi</Text>
            <TextInput style={style.input}/>
            </View>
            <View style={style.inputWrapper}>
            <Text>Isi Laporan</Text>
            <TextInput style={style.input}/>
            </View>
            <View style={style.inputWrapper}>
            <Text>Total Nilai</Text>
            <TextInput style={style.input}/>
            </View>
            
        </View>
    }



    return <ScrollView>
         <View style={style.relative}>
        <Image style={style.image} source={require('./../assets/768.jpg')}/>
        <View style={style.welcome}>
            <View style={style.redbox}></View>
            <View style={style.textContainer}>
            <Text style={style.name}>Olav Thomas</Text>
                <Text style={style.text}>31242142</Text>
            </View>
        </View>
        </View>
        <View style={style.contentContainer}>
        
        <View style={style.informationWrapper}>
            <TouchableHighlight onPress={() => setIsValue(false)}>
            <View style={!setIsValue ? style.active : ""}>
                <Text style={style.information}>INFORMASI</Text>
            </View>
            </TouchableHighlight>

            <View>
                <Text>|</Text>
            </View>
            <TouchableHighlight onPress={() => setIsValue(true)}>
            <View>
                <Text style={style.penilaian}>PENILAIAN</Text>
            </View>
            </TouchableHighlight>
        </View>
        {content}
        
        </View>
    </ScrollView>
}

const style = StyleSheet.create({
    input: {
        width: 100,
        borderRadius: 20,
        backgroundColor: 'white'
    },
    inputWrapper : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10

    },
    information: {
        fontFamily: 'Poppins-Bold',
        fontSize: 22,
    },
    penilaian : {
        fontFamily: 'Poppins-Bold',
        fontSize: 22,
    },
    informationWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textContainer : {
        marginLeft: 10
    },
    name : {
        fontSize: 20,
        fontFamily: "Poppins-Bold",
        color : 'white',
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