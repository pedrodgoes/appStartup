import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #4e4e4e;
    margin-top: 30px;
`;

export const Scroller = styled.ScrollView`
    flex:1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    font-size: 24px;
    width: 240px;
    font-weight: bold;
    color: #4e4e4e;
`;

export const SearchButtom = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`; 

export const LocationArea = styled.View`
    height: 50px;
    background-color: #a9a9a9;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
    border-radius: 30px;
    padding-left: 30px;
`;

export const LocationInput = styled.Text`
    flex: 1;
    font-size: 18px;
    font-weight:  bold;
    align-items: center;
`;

export const LocationFinder = styled.TouchableOpacity`
    height: 26px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

