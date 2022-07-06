import * as React from 'react';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import { RootStackParamList } from './StackParamList';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { InboxMessageScreen } from '../inbox';
import { CreateMatchScreen } from '../../component/matchs';





const Stack = createNativeStackNavigator<RootStackParamList>()
export const _refRootNavigation = createNavigationContainerRef<RootStackParamList>()
export default function Root() {
    return (
        <SafeAreaProvider>
            <NavigationContainer ref={_refRootNavigation} >
                <Stack.Navigator>
                    <Stack.Screen
                        name={"GameScreen"}
                        component={TabNavigator}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name={"InboxMessageScreen"}
                        component={InboxMessageScreen}
                        options={{
                            // headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name={"CreateMatchScreen"}
                        component={CreateMatchScreen}
                        options={{
                            // headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>

    );
}