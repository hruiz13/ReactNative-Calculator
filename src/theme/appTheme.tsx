import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#000'
    },
    resultado: {
        color: '#fff',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },
    resultadoPeq: {
        color: '#aaa',
        fontSize: 30,
        textAlign: 'right'
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    btn: {
        height: 80,
        width: 80,
        backgroundColor: '#333',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    btnText: {
        textAlign: 'center',
        fontSize: 30,
        color: "#fff",
        fontWeight: 'bold'
    },
    col: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    }
});