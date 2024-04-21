import {Text, Image, View, StyleSheet} from 'react-native';

export default function({ title, description, date}) {

    return <View>
        <Text style={style.title}>{title}</Text>
        <Text style={style.description}>{description}</Text>
        <View style={style.dateWrapper}>
            <Image style={style.image} source={require('./../assets/wall-clock.png')} />
            <Text style={style.date}>{date.date} - {date.time.hour}.{date.time.minute}</Text>
        </View>
    </View>
}

const style = StyleSheet.create({
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