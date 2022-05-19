import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'

const UserChatItem = () => {
    return (
        <View style={styles.container}>
            <FastImage
                style={{ width: 60, height: 60, borderRadius: 50 }}
                source={{
                    uri: 'https://unsplash.it/400/400?image=1',

                }}
                resizeMode={FastImage.resizeMode.contain}
            />
            <View style={{ flex: 1, justifyContent: 'space-around', paddingHorizontal: 12 }}>
                <Text style={styles.matchTitleText}>Thuan's badminton match</Text>
                <View style={styles.messageView}>
                    <Text style={styles.messageText}>dsfds fdsfds</Text>
                    <Text style={styles.messageTimeText}>22:01</Text>
                </View>
            </View>
        </View>
    )
}

export default UserChatItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 12
    },
    matchTitleText: {
        fontWeight: '800'
    },
    messageView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    messageText: {
        fontSize: 14,
        color: 'gray'
    },
    messageTimeText: {
        fontSize: 14,
        color: 'gray'
    }
})