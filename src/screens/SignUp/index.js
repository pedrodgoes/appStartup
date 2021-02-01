import React, { useState } from 'react'
import { Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {UserContext} from '../../contexts/UserContext'
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles'
import {useNavigation} from '@react-navigation/native'
import Api from '../../Api'
import SignInput from '../../components/SignInput'

import BarberLogo from '../../assets/publicdomainq-of2.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import PersonIcon from '../../assets/person.svg'

export default () => {

    const {dispatch: userDispatch}= useContext(UserContext)

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleMessageButtonClick = () =>{
        navigation.reset({
            routes:[{name: 'SignIn'}]
        })
    }

    const handleSignClick = async() =>{
        if(nameField!='' && emailField!='' && passwordField!=''){
            let json = await Api.signUp(nameField, emailField, passwordField);
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
                alert('Erro: '+res.error)
            }
        }else{
            alert('Preencha os campos!')
        }
    }

    return (
        <Container>
            <BarberLogo width="100%" height="120" />

            <InputArea>

            <SignInput IconSvg={PersonIcon}
                    placeholder="Digite seu NOME"
                    value={nameField}
                    onChangeText={t => setNameField(t)} />

                <SignInput IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t => setEmailField(t)} />

                <SignInput IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    password={true} />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}