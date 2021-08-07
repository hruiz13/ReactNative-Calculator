import { useRef, useState } from "react"

enum Operators {
    add, substract, multiply, divide
}

export const useCalc = () => {

    const [resultado, setResultado] = useState('000')
    const [resultadoAnterior, setResultadoAnterior] = useState('00000')
    const lastOperator = useRef<Operators>()

    const clear = () => {
        setResultado('0');
        setResultadoAnterior('0')
    }

    const positiveNegative = () => {
        if (resultado.includes('-')) {
            setResultado(resultado.replace('-', ''))
        } else {
            setResultado('-' + resultado)
        }
    }

    const del = () => {
        if (resultado.startsWith('-') && resultado.length > 2) {
            setResultado(resultado.slice(0, -1))
        } else if (resultado.startsWith('-') && resultado.length > 1) {
            setResultado('0')
        } else if (resultado.length > 1) {
            setResultado(resultado.slice(0, -1))
        } else {
            setResultado('0')
        }
    }

    const operator = () => {
        if (resultado.endsWith('.')) {
            setResultadoAnterior(resultado.slice(0, -1));
        } else {
            setResultadoAnterior(resultado);
        }
        setResultado('0')
    }

    const btnDivide = () => {
        operator();
        lastOperator.current = Operators.divide;
    }
    const btnMultiply = () => {
        operator();
        lastOperator.current = Operators.multiply;
    }
    const btnSubstract = () => {
        operator();
        lastOperator.current = Operators.substract;
    }
    const btnAdd = () => {
        operator();
        lastOperator.current = Operators.add;
    }

    const setNumber = (numberText: string) => {
        if (resultado.includes('.') && numberText === '.') return
        if (resultado.startsWith("0") || resultado.startsWith("-0")) {

            if (numberText === '.') {
                setResultado(resultado + numberText)
            } else if (numberText === '0' && resultado.includes('.')) {
                setResultado(resultado + numberText)
            } else if (numberText !== '0' && !resultado.includes('.')) {
                setResultado(numberText)
            } else if (numberText === '0' && !resultado.includes('.')) {
                setResultado(resultado)
            } else {
                setResultado(resultado + numberText)
            }
        } else {
            setResultado(resultado + numberText)
        }

    }

    const result = () => {
        const num1 = Number(resultado);
        const num2 = Number(resultadoAnterior);
        switch (lastOperator.current) {
            case Operators.add:
                setResultado(`${num1 + num2}`);
                break;
            case Operators.substract:
                setResultado(`${num2 - num1}`);
                break;
            case Operators.multiply:
                setResultado(`${num1 * num2}`);
                break;
            case Operators.divide:
                setResultado(`${num2 / num1}`);
                break;
        }

        setResultadoAnterior('0')
    }

    return { resultado, resultadoAnterior, clear, positiveNegative, del, btnAdd, btnDivide, btnMultiply, btnSubstract, setNumber, result }
}
