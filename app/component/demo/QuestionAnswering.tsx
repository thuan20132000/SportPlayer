import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react'

const QuestionAnswering = () => {

    const [text, setText] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    async function handleAsk() {
        setIsProcessing(true);

        const qaText = `[CLS] ${question} [SEP] ${text} [SEP]`;

        // const { result } = await MobileModel.execute<QuestionAnsweringResult>(model, {
        //     text: qaText,
        //     modelInputLength: 360,
        // });

        // // No answer found if the answer is null
        // if (result.answer == null) {
        //     setAnswer('No answer found');
        // } else {
        //     setAnswer(result.answer);
        // }

        // setIsProcessing(false);
    }


    return (
        <View
            style={[
                styles.container,
            ]}>
            <TextInput
                multiline={true}
                onChangeText={setText}
                placeholder="Text"
                placeholderTextColor="#CCC"
                style={[styles.item, styles.input]}
                value={text}
            />
            <TextInput
                onChangeText={setQuestion}
                placeholder="Question"
                placeholderTextColor="#CCC"
                style={[styles.item, styles.input]}
                value={question}
            />
            <Button onPress={() => { }} title="Ask" />
            <Text style={styles.item}>
                {isProcessing ? 'Looking for the answer' : answer}
            </Text>
        </View>
    )
}

export default QuestionAnswering

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    item: {
        margin: 10,
        padding: 10,
    },
    input: {
        borderWidth: 1,
        color: '#000',
    },
})