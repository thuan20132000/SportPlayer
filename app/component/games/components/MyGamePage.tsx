import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { STYLES } from '../../../themes'
import { GameCard } from '../../common/card'

const MyGamePage = () => {
    return (
        <View style={[STYLES.container, styles.container]}>
            <ScrollView>
                <GameCard />
            </ScrollView>
        </View>
    )
}

export default MyGamePage

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingTop: 12
    }
})