import React from 'react'
import styled from 'styled-components/native'

const Area = styled.TouchableOpacity`
    background-color: #a9a9a9;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 10px;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

const UserName = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;

const SeeProfileButton = styled.View`
    width: 85px;
    height: 28px;
    border: 1px solid #3356fd;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: #3356fd;
`;

const SeeProfileButtonText = styled.Text`
    font-size: 14px;
`;

export default ({data}) =>{
    return(
        <Area>
            <Avatar source={{uri: data.avatar}}/>
            <InfoArea>
                <UserName>{data.name}</UserName>

                <SeeProfileButton>
                    <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    )
}