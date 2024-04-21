import {View, Text, Image, StyleSheet} from 'react-native'

export default function({penting, tag, title, description, date, author}) {

    return <View>
        <View style={style.itemWrapper}>
            <View style={style.dateWrapper}>
            <Image style={style.image} source={require('./../assets/wall-clock.png')}/>
            <Text style={style.date}>{author} | {date.date} - {date.time.hour}.{date.time.minute}</Text>
            </View>
            {penting && <View style={style.penting}>
                <Text style={style.pentingText}>PENTING</Text>
            </View>}
            <Text style={style.title}>{title}</Text>
            <Text style={style.description}>{description}</Text>
        </View>
    </View>
}

const style = StyleSheet.create({
    itemWrapper : {
        marginBottom: 5
    },
    image : {
        width : 13,
        height : 13,
    },
    date : {
        fontSize: 13,
        color: '#FF8C00',
        marginLeft: 5
    },
    penting : {
        backgroundColor: '#FF6060',
        borderRadius: 20,
        width: 70,
        paddingTop : 2,
        paddingLeft: 3,
        paddingRight : 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom : 5
    },
    pentingText : {
        color: 'white',
        fontFamily : "Poppins-Bold",
        fontSize: 13,
    },
    title : {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20
    },
    description : {
        fontFamily : 'Poppins-Light',
        fontSize: 14,
        textAlign: 'justify'
    },
    dateWrapper : {
        flexDirection: 'row',
        alignItems: 'center',
    }
})