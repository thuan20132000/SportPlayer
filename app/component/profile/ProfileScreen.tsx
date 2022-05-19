import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileHeader from './components/ProfileHeader'
import ProfileInfoBox from './components/ProfileInfoBox'
import { COLORS } from '../../themes'

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ProfileHeader />
            <ProfileInfoBox />
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        flex: 1,
    }
})