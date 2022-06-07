import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React, { FunctionComponent } from 'react'
import FastImage from 'react-native-fast-image'
import AvatarCircle from '../../common/avatar/AvatarCircle'
import { _refRootNavigation } from '../../navigation/Root'

type Props = {
    onPress?(): void,
    avatarUrl?: string,
    title?: string,
    message?: string,
    time?: Date
}

const UserChatItem: FunctionComponent<Props> = (props) => {


    const onShowInboxMessage = () => {
        _refRootNavigation.navigate('InboxMessageScreen', { id: 1 })
    }

    return (
        <TouchableOpacity style={styles.container}
            onPress={onShowInboxMessage}
        >
            <AvatarCircle imageUrl='https://unsplash.it/400/400?image=1' />
            <View style={{ flex: 1, justifyContent: 'space-around', paddingHorizontal: 12 }}>
                <Text style={styles.matchTitleText}>Thuan's badminton match</Text>
                <View style={styles.messageView}>
                    <Text style={styles.messageText}>dsfds fdsfds</Text>
                    <Text style={styles.messageTimeText}>22:01</Text>
                </View>
            </View>
        </TouchableOpacity>
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