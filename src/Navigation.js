import React from 'react';
import Main from './main';
import { VeryHappy } from './VeryHappy'
import { Happy } from './Happy'
import { Sad } from './Sad'
import { Angry } from './Angry';
import { StackNavigator } from 'react-navigation';

export const Navigation = StackNavigator(
    {
        Main: { screen: Main },
        VeryHappy: { screen: VeryHappy },
        Happy: {screen: Happy},
        Sad: {screen: Sad},
        Angry: {screen: Angry}
    },
    {
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
          gesturesEnabled: false,
        }
        
      }
)
