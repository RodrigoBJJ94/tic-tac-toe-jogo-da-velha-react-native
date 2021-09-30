import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TitleMenu() {
    return (
        <Text style={styles.titleHome}>Tic Tac Toe</Text>      
    );
};

const styles = StyleSheet.create({
    titleHome: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 210,
        marginTop: 40,
    },
});
