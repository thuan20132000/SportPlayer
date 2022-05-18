import { ButtonProps, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React, { FunctionComponent } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { ICONS } from '../../../themes'


export type Props = {
    iconName?: string;
    size?: number
    color?: string
    onPress?(): void
};

const ButtonIcon: FunctionComponent<Props> = ({ iconName = ICONS.plus, onPress, children, color, size = 32 }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button]}>
            <Icon name={iconName} size={size} color={color} />
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 6
    }
})