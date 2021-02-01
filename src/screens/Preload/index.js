import React, {useEffect} from 'react'
import {Text, View} from 'react-native'
import {Container, LoadingIcon} from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation} from '@react-navigation/native'

import BarberLogo from '../../assets/barber.svg'

export default () => {

    const navigation = useNavigation()

    useEffect(()=> {
        const checkToken = async ()=>{
            const token = await AsyncStorage.getItem('token');
            if(token){

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
