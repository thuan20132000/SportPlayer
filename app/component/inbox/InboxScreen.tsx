import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import CommonHeader from '../common/header/CommonHeader'
import { UserChatItem } from './components'
import { COLORS } from '../../themes'

const InboxScreen = () => {
    const offset = useSafeAreaInsets()
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.background }} >
            <CommonHeader title='Inbox' />
            <FlatList
                renderItem={() => <UserChatItem />}
                data={Array(12).fill({})}
                contentContainerStyle={{
                    paddingBottom: offset.bottom
                }}
            />
        </SafeAreaView >
    )
}

export default InboxScreen

const styles = StyleSheet.create({})