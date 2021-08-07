import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface IBtnCalc {
    text: string;
    color?: string;
    width?: boolean;
    action: (numberText: string) => void;
}

export const BtnCalc = ({ text, color = "#2D2D2D", width = false, action }: IBtnCalc) => {
    return (
        <TouchableOpacity onPress={() => action(text)}>
            <View style={{ ...styles.btn, backgroundColor: color, width: (width) ? 180 : 80 }}>
                <Text style={{
                    ...styles.btnText,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
