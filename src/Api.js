import AsyncStorage from '@react-native-community/async-storage'

const BASE_API= 'https://api.b7web.com.br/devbarber/api';

export default {

    checkToken: async(token)=>{
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();
        return json;
    },

    signIn: async(email, password)=>{
        const req = await fetch(`${BASE_API}/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json();
        return json;
    },

    signUp: async(name, email, password)=>{
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await req.json();
        return json;
    },

    getPrest: async(lat = -2.62835, lng = -56.7365)=>{
        const token = await AsyncStorage.getItem('token')

        console.log('LAT', lat);
        console.log('LNG', lng);

        const req = await fetch(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}`)

        const json = await req.json()
        return json;
    }
}