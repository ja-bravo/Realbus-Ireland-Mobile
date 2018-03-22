import {
    StyleSheet
} from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        zIndex: 3,
        position: 'absolute',
        top: '5%',
        width: '100%'
    },
    inner: {
        flex: 1,
        backgroundColor: 'white',
        height: 35,
        borderRadius: 4,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 95,
        padding: 10,
        paddingLeft: 0,
        fontSize: 13,
        color: '#BFACC8',
    },
    icon: {
        padding: 10,
        fontSize: 18,
        color: '#BFACC8',
    }
});

export default style;