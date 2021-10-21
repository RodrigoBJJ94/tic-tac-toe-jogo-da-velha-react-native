import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 70,
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
        width: 110,
        height: 110,
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
