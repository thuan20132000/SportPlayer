import { Animated, NativeScrollPoint, Platform, ScrollView, ScrollViewProps, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import CommonHeader from '../common/header/CommonHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../themes'
import ActionBar from './components/ActionBar'
import FilterBar from './components/FilterBar'
import PageEmpty from '../common/page/PageEmpty'
import AllGamePage from './components/AllGamePage'
import MyGamePage from './components/MyGamePage'

const GameScreen = () => {
    const [selectedActionBar, setSelectedActionBar] = useState(0)
    const _onActionBarPress = (action: number) => {
        console.log('aaa: ', action);
        setSelectedActionBar(action)
    }

    return (
        <SafeAreaView style={styles.container}>
            <CommonHeader title='Games' />
            <ActionBar selectedAction={selectedActionBar} onPress={_onActionBarPress} />
            <View style={styles.body}>
                {
                    selectedActionBar === 0 &&
                    <AllGamePage />
                }
                {
                    selectedActionBar === 1 &&
                    <MyGamePage />
                }
            </View>
        </SafeAreaView>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
    }
})