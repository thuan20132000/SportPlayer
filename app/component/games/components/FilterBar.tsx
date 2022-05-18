import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonIconText from '../../common/button/ButtonIconText'
import { ICONS, STYLES } from '../../../themes'

const FilterBar = () => {
    return (
        <View style={styles.container}>
            <ButtonIconText label='Sports' iconName={ICONS.bicycle} color='#333' />
            <ButtonIconText label='Sort' iconName={ICONS.sort} color='#333' />
            <ButtonIconText label='Filters' iconName={ICONS.filter} color='#333' />
        </View>
    )
}

export default FilterBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 6,
        // borderBottomWidtF1,
        // borderColor: '#dcdcdc',
        backgroundColor: '#ffffff',
        ...STYLES.boxShadow
    }
})