import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconText from '../../common/text/IconText'
import { ICONS } from '../../../themes'

const ProfileHeader = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://unsplash.it/400/400?image=1',
                }}
                style={styles.avatarImage}
            />
            <View style={styles.headerRightInfoView}>
                <Text style={styles.username}>Adam Newbould</Text>
                <View style={styles.suggestionInfoView}>
                    <IconText iconName={ICONS.star} color={'gold'} label='5.00' />
                    <IconText iconName={ICONS.people} label='1' />
                </View>
            </View>
        </View>
    )
}

export default ProfileHeader

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        flexDirection: 'row',
        paddingVertical: 22
    },
    username: {
        fontSize: 22,
        fontWeight: '700'
    },
    avatarImage: {
        width: 100,
        height: 100,
        borderRadius: 8
    },
    suggestionInfoView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    headerRightInfoView: {
        justifyContent: 'space-around',
        paddingHorizontal: 12
    }
})