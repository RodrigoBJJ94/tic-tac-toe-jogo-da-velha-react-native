import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TitleVeryHard() {
    return (
        <Text style={styles.title}>Very Hard</Text>      
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
