import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MenuGameStyles from './MenuGameStyles';

export default function MenuGame(props) {
    return (
        <View style={MenuGameStyles.inlineItensHome}>
            <TouchableOpacity
                onPress={() => props.startGameEasy('X')}
                style={MenuGameStyles.boxPlayerHomeEasy}>
                <Text style={MenuGameStyles.playerXEasy}>Easy</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.startGameMedium('X')}
                style={MenuGameStyles.boxPlayerHomeMedium}>
                <Text style={MenuGameStyles.playerXEasy}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.startGameHard('X')}
                style={MenuGameStyles.boxPlayerHomeHard}>
                <Text style={MenuGameStyles.playerXEasy}>Hard</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.startGameVeryHard('X')}
                style={MenuGameStyles.boxPlayerHomeVeryHard}>
                <Text style={MenuGameStyles.playerXEasy}>Very Hard</Text>
            </TouchableOpacity>
        </View>
    );
};
