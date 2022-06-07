import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ActionBar from '../games/components/ActionBar'
import CommonHeader from '@components/common/header/CommonHeader';
const ExploreScreen = () => {
    const [selectedActionBar, setSelectedActionBar] = useState(0)
    const _onActionBarPress = (action: number) => {
        console.log('aaa: ', action);
        setSelectedActionBar(action)
    }

    return (
        <SafeAreaView>
            <CommonHeader title='Games' />
            <ActionBar selectedAction={selectedActionBar} onPress={_onActionBarPress} />

            <Text>ExploreScreen</Text>
        </SafeAreaView>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({})