import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat'
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { IMessage } from '@model/InboxMessageModel'
import Utils from '../../utils/index'
import { useKeyboard } from '../../hooks/useKeyboard'


const InboxMessageScreen = () => {
    const [messages, setMessages] = useState<IMessage[]>();
    const insets = useSafeAreaInsets();
    const useKeyboardHook = useKeyboard()
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])

    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    const renderInputToolbar = (props: any) => {
        return (
            <InputToolbar
                {...props}

                containerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    alignSelf: 'center',

                }}
            />

        )
    }


    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}

                wrapInSafeArea={false}
                renderInputToolbar={renderInputToolbar}
                messagesContainerStyle={{
                    backgroundColor: 'white',
                }}
                loadEarlier={true}
                infiniteScroll={true}
                renderLoadEarlier={() => <Text></Text>}
            />


        </View>

    )
}

export default InboxMessageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})