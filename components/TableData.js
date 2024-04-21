import {Image, Text, View, StyleSheet, TouchableHighlight} from 'react-native'

export default function({nama, NIM, nilai, tenggatWaktu, status}) {
    return <View style={style.container}>
        <View style={style.header}>
            <View style={style.account}>
                <Image style={style.image} source={require('./../assets/300.jpg')}/>
                <View>
                    <View style={style.nama}>
                        <Text style={style.namaText}>{nama}</Text>
                        <View style={style.status}><Text style={style.statusText}>{status}</Text></View>
                    </View>
                    <Text style={style.nim}>{NIM}</Text>
                </View>
            </View>
            <TouchableHighlight>
            <View style={style.button}>
                <Text style={style.buttonText}>Nilai</Text>
            </View>
            </TouchableHighlight>
        </View>
        <View style={style.statusInfo}>
            <Text style={style.key}>Score : </Text>
            <Text style={style.value}>90</Text>
        </View>
    </View>
}

const style = StyleSheet.create({
    value : {
        fontFamily: 'Poppins-Bold',
        color: '#05FF00',
        fontSize: 16
    },
    header : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3',
        paddingBottom: 14
    },
    container : {
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10
    },
    account : {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image : {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginRight: 7
    },
    nim : {
        color : '#808080'
    },
    nama : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button : {
        backgroundColor: '#04B4FF',
        paddingTop: 4,
        paddingBottom: 4,
        paddingRight: 12,
        paddingLeft: 12,
        borderRadius: 10
    },
    buttonText : {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: 'white'
    },
    status: {
        borderColor: '#05FF00',
        borderWidth: 2,
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 5,
        
    },
    statusText: {
        color: '#05FF00',
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        lineHeight: 22
    },
    statusInfo : {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    namaText : {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16
    }
})
