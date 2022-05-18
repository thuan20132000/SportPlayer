import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React, { FunctionComponent } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { ICONS } from '../../../themes';

export type Props = {
    iconName?: string;
    size?: number
    color?: string
    onPress?(): void
    style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    label?: string
};
const IconText: FunctionComponent<Props> = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <Icon
                name={props.iconName?.toString() || ICONS.plus}
                size={props.size || 28}
                color={props.color}
            />
            <Text style={[styles.buttonText, props.textStyle]}>{props.label}</Text>
        </View>
    )
}

export default IconText

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '600',
        marginLeft: 4

    }
})