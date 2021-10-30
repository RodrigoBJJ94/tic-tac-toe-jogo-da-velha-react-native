import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function Back({ setScreen }) {
    return (
        <TouchableOpacity
            onPress={() => setScreen('menu')}
            style={Styles.buttonBackMenu}>
            <Text style={Styles.textBackMenu}>Back to menu</Text>
        </TouchableOpacity>
    );
};
