import { StyleSheet, Text, View } from 'react-native'
import React, { FunctionComponent } from 'react'
import ButtonText from '../../common/button/ButtonText'
import { COLORS } from '../../../themes'

type Props = {
    selectedAction?: number
    onPress(action: number): void
}
const ActionBar: FunctionComponent<Props> = (props) => {
    return (
        <View style={styles.container}>
            <ButtonText
                style={{ backgroundColor: props.selectedAction === 0 ? 'rgba(68, 191, 235, 0.33)' : '#ffffff' }}
                label="All games"
                textStyle={{
                    color: COLORS.primary
                }}
                onPress={() => props?.onPress(0)}
            />
            <ButtonText
                style={{ backgroundColor: props.selectedAction === 1 ? 'rgba(68, 191, 235, 0.33)' : '#ffffff' }}
                label="My games"
                textStyle={{
                    color: COLORS.primary
                }}
                onPress={() => props?.onPress(1)}

            />
        </View>
    )
}

export default ActionBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 8
    }
})