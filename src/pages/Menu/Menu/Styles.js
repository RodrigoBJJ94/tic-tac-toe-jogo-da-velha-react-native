import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    inlineItensHome: {
        flexDirection: 'row',
    },
    boxPlayerHomeEasy: {
        width: Dimensions.get('screen').width / 4.5,
        height: 35,
        backgroundColor: 'rgb(0, 64, 128))',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        borderRadius: 5,
    },
    boxPlayerHomeMedium: {
        width: Dimensions.get('screen').width / 4.5,
        height: 35,
        backgroundColor: 'rgb(29, 188, 146)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        borderRadius: 5,
    },
    boxPlayerHomeHard: {
        width: Dimensions.get('screen').width / 4.5,
        height: 35,
        backgroundColor: 'rgb(121, 0, 255)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        borderRadius: 5,
    },
    boxPlayerHomeVeryHard: {
        width: Dimensions.get('screen').width / 4.5,
        height: 35,
        backgroundColor: 'rgb(250, 91, 69)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        borderRadius: 5,
        marginBottom: 10,
    },
    playerXEasy: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 14,
        color: '#fff',
    },
    containerHome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: 'rgb(19, 20, 31)',
    }
});
