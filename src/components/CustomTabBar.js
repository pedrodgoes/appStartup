import React, {useContext} from 'react'
import styled from 'styled-components/native'

import {UserContext} from '../contexts/UserContext'

import HomeIcon from '../assets/home.svg'
import SearchIcon from '../assets/search.svg'
import TodayIcon from '../assets/today.svg'
import FavoriteIcon from '../assets/favorite.svg'
import AccountIcon from '../assets/account.svg'

const TabArea = styled.View`
    height: 60px;
    flex-direction: row;
    background-color: #d0d0d0;
`;

const TabItem = styled.TouchableOpacity`
    flex:1;
    justify-content: center;
    align-items: center;
    background-color: #a9a9a9;
`;

const AvatarIcon = styled.Image`
    width: 28px;
    height: 28px;
    border-radius: 6px;
`;

export default ({state, navigation}) =>{

    const {state:user} = useContext(UserContext);

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }
    return(
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon width="28" height="28" fill="#000"/>
            </TabItem>
            <TabItem onPress={()=>goTo('Search')}>
                <SearchIcon  width="28" height="28" fill="#000"/>
            </TabItem>
            <TabItem onPress={()=>goTo('Appointments')}>
                <TodayIcon  width="56" height="56" fill="#000"/>
            </TabItem>
            <TabItem onPress={()=>goTo('Favorites')}>
                <FavoriteIcon  width="28" height="28" fill="#000"/>
            </TabItem>
            <TabItem onPress={()=>goTo('Profile')}>
                {user.avatar!= '' ? <AvatarIcon source={{uri: user.avatar}} />
                :
                <AccountIcon width="28" height="28" fill="#000"/>
                }
            </TabItem>
        </TabArea>
    )
}