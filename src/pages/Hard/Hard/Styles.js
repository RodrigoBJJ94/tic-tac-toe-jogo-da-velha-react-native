import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    containerHard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(121, 0, 255)',
    },
    playerX: {
        fontSize: 60,
        color: '#fff',
    },
    playerO: {
        fontSize: 60,
        color: '#fff'
    },
    boxPlayer: {
        width: Dimensions.get('screen').width / 3.15,
        height: Dimensions.get('screen').width / 3.15,
        backgroundColor: 'rgba(220, 220, 220,0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0.5,
        borderRadius: 1,
    },
    inlineItens: {
        flexDirection: 'row',
    }
});
