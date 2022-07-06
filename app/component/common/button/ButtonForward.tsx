import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { FunctionComponent } from 'react'
import ButtonIconText from './ButtonIconText'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS, ICONS } from '../../../themes'

export type Props = {
    iconName?: string;
    size?: number
    color?: string
    onPress?(): void
    style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    label?: string
};
const ButtonForward: FunctionComponent<Props> = (props) => {
    return (
        <TouchableOpacity style={[styles.container]} onPress={props.onPress}>
            <ButtonIconText textStyle={{ fontSize: 12 }} label={props.label} iconName={props.iconName?.toString()} />
            <Icon
                name={ICONS.forward}
                size={props.size || 24}
                color={props.color}
            />
        </TouchableOpacity>
    )
}

export default ButtonForward

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        borderTopWidth: 0.2,
        borderTopColor: COLORS.border,
    }
})