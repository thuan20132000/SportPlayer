import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import { RootStackParamList } from './StackParamList';
import { SafeAreaProvider } from 'react-native-safe-area-context';





const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Root() {
    return (
        <SafeAreaProvider>
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
        </SafeAreaProvider>

    );
}