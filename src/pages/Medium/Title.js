import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TitleMedium() {
    return (
        <Text style={styles.title}>Medium</Text>      
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
