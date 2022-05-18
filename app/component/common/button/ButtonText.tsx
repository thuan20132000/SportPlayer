import { StyleSheet, StyleSheetProperties, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React, { FunctionComponent } from 'react'

export type Props = {
    label?: string
    onPress?(): void,
    style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
};

const ButtonText: FunctionComponent<Props> = ({ onPress, textStyle, label, children, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.buttonText, textStyle]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default ButtonText

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 6,
        padding: 8,
        width: 120,
        borderRadius: 6
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '600',

    }
})