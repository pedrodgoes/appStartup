import React , {useState, useEffect} from 'react'
import {Platform} from 'react-native'
import { Text, RefreshControl } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Api from '../../Api'
import { 
    Container, 
    Scroller, 
    HeaderArea, 
    HeaderTitle, 
    SearchButtom, 
    LocationArea, 
    LocationInput, 
    LocationFinder,
    LoadingIcon,
    ListArea } from './style'
import BarbemItem from '../../components/BarbemItem'
import SearchIcon from '../../assets/search.svg'
import MyLocationIcon from '../../assets/my_location.svg'

export default () => {

    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('')
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const getPrest = async()=>{
        setLoading(false)
        setList([])

        let lat = -2.62835;
        let lng = -56.7365;

        let res = await Api.getPrest(lat, lng);
        if (res.error == ''){

            if(res.loc){
                setLocationText(res.loc)
            }
            setList(res.data)
        }else{
            alert('Erro: '+res.error)
        }
    }

    useEffect(() => {
        getPrest();
    }, [])

    const onRefresh = () =>{
        setRefreshing(false);
        getPrest();
    }

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre seu prestador de serviços</HeaderTitle>
                    <SearchButtom onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon width="30" height="30" fill="black" />
                    </SearchButtom>
                </HeaderArea>

                <LocationArea>
                    <Text>   Parintins</Text>
                    <LocationInput/>
                    <LocationFinder >
                    </LocationFinder>
                </LocationArea>

                {loading && <LoadingIcon size="large" color="yellow"/>}

                <ListArea>
                    {list.map((item, k)=>(
                        <BarbemItem key={k} data={item}/>
                    ))}
                </ListArea>
                
            </Scroller>


        </Container>
    )
}