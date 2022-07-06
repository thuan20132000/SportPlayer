import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { FunctionComponent } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS, ICONS } from '../../../themes';
export type Props = {
    iconName?: string;
    size?: number
    color?: string
    onPress?(): void
    style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    label?: string
    placeholder?: string
};
const InputTextIcon: FunctionComponent<Props> = (props) => {

    return (
        <View style={styles.container}>
            <Icon
                name={ICONS.forward}
                size={props.size || 24}
                color={props.color}
            />
            <TextInput style={[styles.input]} placeholder={props.placeholder} />
        </View>
    )
}

export default InputTextIcon

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        borderTopWidth: 0.2,
        borderTopColor: COLORS.border,
    },
    input: {
        flex: 1,
        height: 40,
        paddingLeft: 20
    }
})