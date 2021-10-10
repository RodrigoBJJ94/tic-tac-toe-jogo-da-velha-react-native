import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';

export default function MenuGame(props) {
    return (
        <View style={Styles.inlineItensHome}>
            <TouchableOpacity
                onPress={() => props.startGameEasy('X')}
                style={Styles.boxPlayerHomeEasy}>
                <Text style={Styles.playerXEasy}>Easy</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.startGameMedium('X')}
                style={Styles.boxPlayerHomeMedium}>
                <Text style={Styles.playerXEasy}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.startGameHard('X')}
                style={Styles.boxPlayerHomeHard}>
                <Text style={Styles.playerXEasy}>Hard</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.startGameVeryHard('X')}
                style={Styles.boxPlayerHomeVeryHard}>
                <Text style={Styles.playerXEasy}>Very Hard</Text>
            </TouchableOpacity>
        </View>
    );
};
