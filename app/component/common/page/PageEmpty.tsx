import { Image, ImageProps, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React, { FunctionComponent } from 'react'

type Props = {
    label?: string
    imageSource?: ImageSourcePropType
    content?: string
}
const PageEmpty: FunctionComponent<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://freesvg.org/img/badminton.png' }} style={styles.image} />
            <Text style={styles.label}>{props.label}</Text>
        </View>
    )
}

export default PageEmpty

const styles = StyleSheet.create({
    image: {
        // width: 120,
        aspectRatio: 1
    },
    label: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center'
    },
    container: {
        paddingHorizontal: 26,

    }
})