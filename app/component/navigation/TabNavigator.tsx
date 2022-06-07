
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { TabParamList } from './TabParamList';
import { GameScreen } from '../games';
import { ExploreScreen } from '../explore';
import { InboxScreen } from '../inbox';
import { LeaguesScreen } from '../leagues';
import { PlayerScreen } from '../players';
import { ScreenNameEnums, TabBarIcon } from '../../enums';
import { COLORS } from '../../themes';
import { ProfileScreen } from '../profile';



const Tab = createBottomTabNavigator<TabParamList>();
const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: TabBarIcon = TabBarIcon.InBox;
                    let screenLabel: ScreenNameEnums;
                    switch (route.name) {
                        case 'GameScreen':
                            iconName = TabBarIcon.Games
                            break;
                        case 'ExploreScreen':
                            iconName = TabBarIcon.Explore
                            break;
                        case 'PlayersScreen':
                            iconName = TabBarIcon.Players
                            break;
                        case 'InboxScreen':
                            iconName = TabBarIcon.InBox
                            break;
                        case 'ProfileScreen':
                            iconName = TabBarIcon.Profile
                            break;
                        default:
                            iconName = TabBarIcon.Leagues
                            break;
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            })}
        >
            <Tab.Screen
                name='GameScreen'
                component={GameScreen}
                options={{
                    title: ScreenNameEnums.Games
                }}
            />
            <Tab.Screen
                name='InboxScreen'
                component={InboxScreen}
                options={{
                    title: ScreenNameEnums.InBox
                }}
            />
            <Tab.Screen
                name='ProfileScreen'
                component={ProfileScreen}
                options={{
                    title: ScreenNameEnums.Profile
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator