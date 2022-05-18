import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Camera, Image, MobileModel } from 'react-native-pytorch-core';


const model = require("../../assets/mobilenet_v3_small.ptl");
var json = JSON.parse(JSON.stringify(model));


type ImageClassificationResult = {
    maxIdx: number;
    confidence: number;
};
const ImageClasses = require('../../assets/MobileNetV3Classes.json');


export default function ImageClassificationDemo() {
    // Get safe area insets to account for notches, etc.


    // Component state that holds the detected object class
    const [objectClass, setObjectClass] = React.useState<string>('');

    async function handleImage(image: Image) {
        const { result } = await MobileModel.execute<ImageClassificationResult>(
            model,
            {
                image,

            },
        );

        // Get max index (argmax) result to resolve the top class name
        const topClass = ImageClasses[result.maxIdx];

        // Log top class to Metro console
        console.log(topClass);

        // It is important to release the image to avoid memory leaks
        image.release();

        // if (result.confidence > 0.3) {
        //     // Get max index (argmax) result to resolve the top class name
        //     const topClass = ImageClasses[result.maxIdx];

        //     // Set object class state to be the top class detected in the image
        //     setObjectClass(topClass);
        // } else {
        //     // Reset the object class if confidence value is low
        //     setObjectClass('');
        // }

        // It is important to release the image to avoid memory leaks
        image.release();
    }


    return (
        <View
            style={[
                styles.container,

            ]}>
            <Text style={styles.label}>Image Classification</Text>
            <Camera style={styles.camera} onCapture={handleImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flexGrow: 1,
        padding: 20,
    },
    label: {
        marginBottom: 10,
    },
    camera: {
        flexGrow: 1,
        width: '100%',
    },
});