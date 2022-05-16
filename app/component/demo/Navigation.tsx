import * as React from 'react';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import QuestionAnswering from './QuestionAnswering';



export type RootStackParamList = {
    HomeScreen: object;
    QuestionAnwsering: object
};

const Stack = createNativeStackNavigator<RootStackParamList>()
export const _refDemoNavigation = createNavigationContainerRef<RootStackParamList>()
export default function Root() {
    return (
        <NavigationContainer ref={_refDemoNavigation} >
            <Stack.Navigator>
                <Stack.Screen
                    name='HomeScreen'
                    component={Home}
                />
                <Stack.Screen
                    name='QuestionAnwsering'
                    component={QuestionAnswering}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}