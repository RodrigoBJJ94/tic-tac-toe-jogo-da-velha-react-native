import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import MenuGameStyles from './MenuGameStyles';

export default function Back(props) {
    return (
        <TouchableOpacity
            onPress={() => props.setScreen('menu')}
            style={MenuGameStyles.buttonBackMenu}>
            <Text style={MenuGameStyles.textBackMenu}>Back to menu</Text>
        </TouchableOpacity>
    );
};
