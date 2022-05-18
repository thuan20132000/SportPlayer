import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonText from '../button/ButtonText'
import AvatarCircle from '../avatar/AvatarCircle'
import IconText from '../text/IconText'
import { COLORS, ICONS } from '../../../themes'
import ButtonIcon from '../button/ButtonIcon'
import ButtonIconText from '../button/ButtonIconText'

const GameCard = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri: 'https://img.freepik.com/free-photo/badminton-shuttlecock-black-background_23-2147924599.jpg'
                }}
                style={{
                    height: 100,
                    justifyContent: 'center',
                    paddingHorizontal: 12
                }}
            >
                <Text style={styles.sportTitle} >BADMINTON</Text>
                <Text style={styles.sportDate} >Mat 10 - All Day</Text>
                <ButtonText label='Played' style={{ position: 'absolute', right: 0, backgroundColor: COLORS.buttonBackground, top: 8 }} textStyle={{ color: 'white' }} />
            </ImageBackground>
            <View style={{ padding: 12 }}>
                <View style={{ flexDirection: 'row', paddingBottom: 12 }}>
                    <AvatarCircle width={50} />
                    <AvatarCircle width={50} />
                </View>
                <IconText style={{ marginBottom: 8 }} size={22} iconName={ICONS.trophy} label='Math' />
                <IconText style={{ marginBottom: 8 }} size={22} iconName={ICONS.cellular} label='All levels' />
                <IconText style={{ marginBottom: 8 }} size={22} iconName={ICONS.location} label='104 Le Van Thinh, Hoa Minh, Lien Chieu' />
                <ButtonText
                    label='Chat'
                    style={{ marginHorizontal: 0, backgroundColor: COLORS.buttonBackground, borderRadius: 6, alignSelf: 'center', padding: 8 }}
                />
            </View>
        </View>
    )
}

export default GameCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden'
    },
    sportTitle: {
        color: 'white',
        fontSize: 18
    },
    sportDate: {
        fontWeight: '800',
        color: 'white',
        marginTop: 8
    }
})