import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FunctionComponent } from 'react'

type Props = {
    width?: number,
    imageUrl?: string
}
const AvatarCircle: FunctionComponent<Props> = ({
    width = 50,
    imageUrl = 'https://png.pngtree.com/element_our/png_detail/20181129/badminton-jumping-smash-png_253743.jpg'
}) => {

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: imageUrl
                }}
                style={{
                    width: width,
                    height: width,
                    borderRadius: 50
                }}
            />
        </View>
    )
}

export default AvatarCircle

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 50,
        marginRight: 6
    }
})