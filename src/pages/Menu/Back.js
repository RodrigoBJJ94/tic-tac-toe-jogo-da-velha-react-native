import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Back(props) {
    return (
        <TouchableOpacity
            onPress={() => props.setScreen('menu')}
            style={styles.buttonBackMenu}>
            <Text style={styles.textBackMenu}>Back to menu</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonBackMenu: {
        marginTop: 30,
    },
    textBackMenu: {
        color: '#fff',
        fontSize: 20,
    },
});
