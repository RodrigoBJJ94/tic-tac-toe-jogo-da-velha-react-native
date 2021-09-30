import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TitleEasy() {
    return (
        <Text style={styles.title}>Easy</Text>      
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 70,
    },
});
