import React from 'react'
import { Text, View } from 'react-native'
import { BtnCalc } from '../components/BtnCalc';
import { useCalc } from '../hooks/useCalc';
import { styles } from '../theme/appTheme';



export const CalculadoraScreen = () => {

    const { resultado, resultadoAnterior, clear, positiveNegative, del, btnAdd, btnDivide, btnMultiply, btnSubstract, setNumber, result } = useCalc()

    return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.resultadoPeq}>{resultadoAnterior !== '0' && resultadoAnterior}</Text>
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{resultado}</Text>

            <View style={styles.col}>
                <BtnCalc text='C' color='#9B9B9B' action={clear} />
                <BtnCalc text='+/-' color='#9B9B9B' action={positiveNegative} />
                <BtnCalc text='del' color='#9B9B9B' action={del} />
                <BtnCalc text='/' color='#FF9427' action={btnDivide} />
            </View>
            <View style={styles.col}>
                <BtnCalc text='7' action={setNumber} />
                <BtnCalc text='8' action={setNumber} />
                <BtnCalc text='9' action={setNumber} />
                <BtnCalc text='X' color='#FF9427' action={btnMultiply} />
            </View>
            <View style={styles.col}>
                <BtnCalc text='4' action={setNumber} />
                <BtnCalc text='5' action={setNumber} />
                <BtnCalc text='6' action={setNumber} />
                <BtnCalc text='-' color='#FF9427' action={btnSubstract} />
            </View>
            <View style={styles.col}>
                <BtnCalc text='1' action={setNumber} />
                <BtnCalc text='2' action={setNumber} />
                <BtnCalc text='3' action={setNumber} />
                <BtnCalc text='+' color='#FF9427' action={btnAdd} />
            </View>
            <View style={styles.col}>
                <BtnCalc text='0' action={setNumber} width />
                <BtnCalc text='.' action={setNumber} />
                <BtnCalc text='=' color='#FF9427' action={result} />
            </View>
        </View>
    )
}
