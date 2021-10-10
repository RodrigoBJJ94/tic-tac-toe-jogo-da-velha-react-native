import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import EasyStyles from './EasyStyles';
import useSound from "react-native-use-sound";

export default function TitleEasy() {
    const [play, pause, stop, data] = useSound('music.mp3');

    const handlePlay = () => {
        if (data.isPlaying) pause();
        else play();
    };

    return (
        <>
            <Text style={EasyStyles.title}>Easy</Text>
            <TouchableOpacity onPress={handlePlay}>
                <Text>{data.isPlaying ? "🔊" : "🔈"}</Text>
            </TouchableOpacity>
        </>
    );
};
