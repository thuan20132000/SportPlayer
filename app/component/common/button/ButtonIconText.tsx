import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { FunctionComponent } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { ICONS } from '../../../themes'

export type Props = {
    iconName?: string;
    size?: number
    color?: string
    onPress?(): void
    style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    label?: string
};

const ButtonIconText: FunctionComponent<Props> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.button, props.style]}>
            <Icon
                name={props.iconName?.toString() || ICONS.plus}
                size={props.size || 28}
                color={props.color}
            />
            <Text style={[styles.buttonText, props.textStyle]}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIconText

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 6,
        flexDirection: 'row',
        alignItems: 'center',

    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '600',
        marginLeft: 8

    }
})