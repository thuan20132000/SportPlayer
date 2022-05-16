
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
                        default:
                            iconName = TabBarIcon.Leagues
                            break;
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: 'gray',
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
                name='PlayersScreen'
                component={PlayerScreen}
                options={{
                    title: ScreenNameEnums.Players
                }}
            />
            <Tab.Screen
                name='ExploreScreen'
                component={ExploreScreen}
                options={{
                    title: ScreenNameEnums.Explore
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
                name='LeaguesScreen'
                component={LeaguesScreen}
                options={{
                    title: ScreenNameEnums.Leagues
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator