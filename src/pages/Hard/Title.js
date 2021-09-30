import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TitleHard() {
    return (
        <Text style={styles.title}>Hard</Text>      
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
