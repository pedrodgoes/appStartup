import React, {useEffect, useContext} from 'react'
import {Text, View} from 'react-native'
import {Container, LoadingIcon} from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation} from '@react-navigation/native'
import Api from '../../Api'
import {UserContext} from '../../contexts/UserContext'
import BarberLogo from '../../assets/publicdomainq-of2.svg'

export default () => {

    const {dispatch: userDispatch}= useContext(UserContext)

    const navigation = useNavigation()

    useEffect(()=> {
        const checkToken = async ()=>{
            const token = await AsyncStorage.getItem('token');
            if(token){
                let json = await Api.checkToken(token);
                if(json.token){
                    await AsyncStorage.setItem('token', json.token);

                    userDispatch({
                        type: 'setAvatar',
                        payload:{
                            avatar: json.data.avatar
                        }
                    })
     
                    navigation.reset({
                        routes:[{name: 'MainTab'}]
                    })
                }else{
                    navigation.navigate('SignIn')
                }
            }else{
                navigation.navigate('SignIn')
            }
        }
        checkToken();
    }, [])
    return (
            
            <Container>
                <BarberLogo width="100%" height="250"/>
                <LoadingIcon size="large" color="white"/>
            </Container>
    );
}
