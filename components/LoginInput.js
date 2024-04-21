import {Text, TextInput, StyleSheet, View, Image} from 'react-native';
import { forwardRef } from 'react';

const LoginInput = forwardRef(({title, password}, ref) => {
    const icon = (password === true ? require("./../assets/key.png") : require("./../assets/user-black.png"))
    return <>
    <Text style={style.title}>{title}</Text>
    <View style={style.inputField}>
    <TextInput onChangeText={(newText) => ref.current = newText} style={style.input} secureTextEntry={password}/>
    <Image style={style.image} source={icon} />
    </View>
    </>
})


const style = StyleSheet.create({
    title : {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        marginTop: 28
    },
    input : {
        padding: 5,
        flex: 1,
    },
    inputField : {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#0094FF',
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        paddingRight: 11,
        paddingLeft: 8
    },
    image : {
        width: 30,
        height: 30
    }
})

export default LoginInput;