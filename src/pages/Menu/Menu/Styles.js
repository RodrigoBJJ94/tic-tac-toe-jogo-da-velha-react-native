import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    inlineItensHome: {
        flexDirection: 'row',
    },
    boxPlayerHomeEasy: {
        width: Dimensions.get('screen').width / 4.3,
        height: 35,
        backgroundColor: 'rgb(0, 64, 128))',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        borderRadius: 5,
        marginTop: 240,
    },
    boxPlayerHomeMedium: {
        width: Dimensions.get('screen').width / 4.3,
        height: 35,
        backgroundColor: 'rgb(29, 188, 146)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        borderRadius: 5,
        marginTop: 240,
    },
    boxPlayerHomeHard: {
        width: Dimensions.get('screen').width / 4.3,
        height: 35,
        backgroundColor: 'rgb(121, 0, 255)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        borderRadius: 5,
        marginTop: 240,
    },
    boxPlayerHomeVeryHard: {
        width: Dimensions.get('screen').width / 4.3,
        height: 35,
        backgroundColor: 'rgb(250, 91, 69)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        borderRadius: 5,
        marginTop: 240,
    },
    playerXEasy: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 15,
        color: '#fff',
    },
    containerHome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(19, 20, 31)',
    }
});
