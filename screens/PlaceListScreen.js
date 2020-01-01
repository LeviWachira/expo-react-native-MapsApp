import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';

const PlaceListScreen = props => {

    const places = useSelector(state => state.places.places)

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <PlaceItem
                    image={itemData.item.imageUri}
                    title={itemData.item.title}
                    address={null}
                    onSelect={() => {
                        props.navigation.navigate('PlaceDetail', {
                            placeTitle: itemData.item.title,
                            placeId: itemData.item.id
                        });
                    }}
                />
            )}
        />
    )
};

const styles = StyleSheet.create({

})

PlaceListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Places',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Add Place'
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => {
                        navData.navigation.navigate('NewPlace');
                    }}
                />
            </HeaderButtons>
        )
    }


}

export default PlaceListScreen;
