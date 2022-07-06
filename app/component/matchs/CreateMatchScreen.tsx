import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ButtonForward } from '../common/button'
import { COLORS, ICONS } from '../../themes'
import { InputTextIcon } from '../common/inputs'

const CreateMatchScreen = () => {
    return (
        <View style={{ backgroundColor: COLORS.background, flex: 1 }}>

            <ScrollView>
                {/* <Text style={styles.headerTitleText} >CreateMatchScreen</Text> */}
                <ButtonForward iconName={ICONS.ball} label='Sport - Badminton' />
                <InputTextIcon placeholder='Title' />
                <InputTextIcon placeholder='Description' />
                <ButtonForward iconName={ICONS.location} label='Area - Badminton' />
                <ButtonForward iconName={ICONS.calendar} label='Date - Badminton' />
                <ButtonForward iconName={ICONS.time} label='Time - Badminton' />
                <ButtonForward label='Activity Access - Badminton' />
                <ButtonForward iconName={ICONS.settings} label='Advanced Settings - Badminton' />

            </ScrollView>
        </View>

    )
}

export default CreateMatchScreen

const styles = StyleSheet.create({
    headerTitleText: {
        fontSize: 16,
        marginVertical: 22,
        paddingHorizontal: 12
    }
})