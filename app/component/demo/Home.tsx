import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react'
import { _refDemoNavigation } from './Navigation';

const Home = () => {

    const showAnswerQuestionScreen = () => {
        _refDemoNavigation.navigate('QuestionAnwsering', {})
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
        }} >
            <Button onPress={showAnswerQuestionScreen} title="AnsweringQuestion" />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({})