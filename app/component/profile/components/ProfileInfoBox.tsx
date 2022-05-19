import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconText from '../../common/text/IconText'
import { ICONS } from '../../../themes'

const ProfileInfoBox = () => {
    return (
        <View>
            <View style={styles.infoBoxView}>
                <View style={styles.infoBox}>
                    <Text style={styles.infoLabel}>Age</Text>
                    <Text style={styles.infoValue} >23</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoLabel}>Nationality</Text>
                    <Text style={styles.infoValue} >Viet Nam</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoLabel}>Gender</Text>
                    <Text style={styles.infoValue} >Male</Text>
                </View>
            </View>
            <View style={styles.infoBoxViewContainer}>
                <View style={styles.infoItemView}>
                    <IconText iconName={ICONS.location} label='Location' />
                    <Text style={styles.infoItemText}>104 Le Van Thinh, Hoa Minh, Lien CHieu, Da Nang, VietNam</Text>
                </View>
                <View style={styles.infoItemView}>
                    <IconText iconName={ICONS.happy} label='Hobbies and interests' />
                    <Text style={styles.infoItemText}>104 Le Van Thinh, Hoa Minh, Lien CHieu, Da Nang, VietNam</Text>
                </View>
            </View>
        </View>
    )
}

export default ProfileInfoBox

const styles = StyleSheet.create({
    infoBox: {
        alignItems: 'center'
    },
    infoLabel: {
        color: 'gray',
        fontSize: 16,
        fontWeight: '500'
    },
    infoValue: {
        fontSize: 15,
        fontWeight: '400',
        paddingVertical: 4
    },
    infoItemText: {
        marginLeft: 30,
        marginTop: 6
    },
    infoItemView: {
        marginHorizontal: 20,
        marginVertical: 12

    },
    infoBoxView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 22,
        paddingVertical: 26,
        borderBottomWidth: 0.6,
        borderBottomColor: 'gray',
        width: '80%',
        alignSelf: 'center'
    },
    infoBoxViewContainer: {
        marginTop: 20
    }
})