
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../home';
import { TabParamList } from './TabParamList';
import { GameScreen } from '../games';
import { ExploreScreen } from '../explore';
import { InboxScreen } from '../inbox';
import { LeaguesScreen } from '../leagues';
import { PlayerScreen } from '../players';



const Tab = createBottomTabNavigator<TabParamList>();
const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='PlayersScreen'
                component={PlayerScreen}
            />
            <Tab.Screen
                name='GameScreen'
                component={GameScreen}
            />
            <Tab.Screen
                name='ExploreScreen'
                component={ExploreScreen}
            />
            <Tab.Screen
                name='InboxScreen'
                component={InboxScreen}
            />
            <Tab.Screen
                name='LeaguesScreen'
                component={LeaguesScreen}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator