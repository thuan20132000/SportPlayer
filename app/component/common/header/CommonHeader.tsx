import { StyleSheet, Text, View } from 'react-native'
import React, { FunctionComponent } from 'react'
import { COLORS, ICONS } from '../../../themes'
import ButtonIcon from '../button/ButtonIcon'

export type Props = {
    title: string;

};
const CommonHeader: FunctionComponent<Props> = ({ title = 'Title', children }) => {

    const _showAddScreen = () => { }

    return (
        <View style={styles.container}>
            <View style={styles.headerTitleView}>
                <Text style={styles.headerTitleText}>{title}</Text>
            </View>
            <View style={styles.headerIconView}>
                <ButtonIcon iconName={ICONS.plus} onPress={_showAddScreen} />
                <ButtonIcon iconName={ICONS.notification} onPress={_showAddScreen} />
            </View>
        </View>
    )
}

export default CommonHeader

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12
    },
    headerTitleView: {
        flex: 1
    },
    headerTitleText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    headerIconView: {
        flexDirection: 'row'
    }
})