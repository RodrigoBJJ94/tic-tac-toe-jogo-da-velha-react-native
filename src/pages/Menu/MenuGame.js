import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MenuGame(props) {
    return (
        <View style={styles.inlineItensHome}>
            <TouchableOpacity
                onPress={() => props.startGameEasy('X')}
                style={styles.boxPlayerHomeEasy}>
                <Text style={styles.playerXEasy}>Easy</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.startGameMedium('X')}
                style={styles.boxPlayerHomeMedium}>
                <Text style={styles.playerXEasy}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.startGameHard('X')}
                style={styles.boxPlayerHomeHard}>
                <Text style={styles.playerXEasy}>Hard</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.startGameVeryHard('X')}
                style={styles.boxPlayerHomeVeryHard}>
                <Text style={styles.playerXEasy}>Very Hard</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inlineItensHome: {
        flexDirection: 'row',
    },
    boxPlayerHomeEasy: {
        width: 81,
        height: 35,
        backgroundColor: 'rgb(0, 64, 128))',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 5,
        marginTop: 240,
    },
    boxPlayerHomeMedium: {
        width: 81,
        height: 35,
        backgroundColor: 'rgb(29, 188, 146)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 5,
        marginTop: 240,
    },
    boxPlayerHomeHard: {
        width: 81,
        height: 35,
        backgroundColor: 'rgb(121, 0, 255)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 5,
        marginTop: 240,
    },
    boxPlayerHomeVeryHard: {
        width: 81,
        height: 35,
        backgroundColor: 'rgb(250, 91, 69)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 5,
        marginTop: 240,
    },
    playerXEasy: {
        fontSize: 16,
        color: '#fff',
    },
});