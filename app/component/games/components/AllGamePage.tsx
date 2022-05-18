import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { STYLES } from '../../../themes'
import PageEmpty from '../../common/page/PageEmpty'
import FilterBar from './FilterBar'

const AllGamePage = () => {
    return (
        <View style={[STYLES.container, { width: Dimensions.get('screen').width }]}>
            <FilterBar />
            <PageEmpty label='1000s of players near you are looking for a sport partner' />
        </View>
    )
}

export default AllGamePage

const styles = StyleSheet.create({})