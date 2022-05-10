import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import { RootStackParamList } from './StackParamList';





const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Root() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"GameScreen"}
                    component={TabNavigator}
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}