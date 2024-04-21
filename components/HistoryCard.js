import {Text, Image, View, StyleSheet} from 'react-native';

export default function({title, description, date}) {
    const filter = description.split(" ");
    let content = <Text style={style.description}>
    <Text>Anda telah menginputkan nilai</Text>
    <View style={style.valueWrapper}>
    <Text style={style.value}>{filter[4]}</Text>
    </View>
    <Text>untuk</Text>
        <View style={style.studentWrapper}>
    <Text style={style.student}>{filter[6]} {filter[7]} {filter[8]} {filter[9]} {filter[10]}</Text>
    </View>
    <Text>dengan NIM</Text>
        <View style={style.nimWrapper}>
    <Text style={style.nim}>{filter[13]}</Text>
    </View>
</Text>



    return <View>
        <Text style={style.title}>{title}</Text>
        {content}
        <View style={style.dateWrapper}>
            <Image style={style.image} source={require('./../assets/wall-clock.png')} />
            <Text style={style.date}>{date.date} - {date.time.hour}.{date.time.minute}</Text>
        </View>
    </View>
}

const style = StyleSheet.create({
    valueWrapper : {
        borderRadius: 20,
        backgroundColor: '#00DE31',
    },
    value : {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        lineHeight: 20,
    },
    studentWrapper : {
        borderRadius: 20,
        backgroundColor: '#118DFF',
    },
    student : {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        lineHeight: 20,
    },
    nimWrapper : {
        borderRadius: 20,
        backgroundColor: '#118DFF',
    },
    nim : {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        lineHeight: 20,
    },
    dateWrapper : {
        flexDirection : 'row',
        alignItems: 'center'
    },
    title : {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18
    }, 
    description: {
        fontFamily: 'Poppins-Light',
        fontSize: 14,
    },
    date : {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#FF8C00',
        marginLeft: 5
    },
    image : {
        width: 13,
        height: 13,
        marginBottom: 4
    }
})