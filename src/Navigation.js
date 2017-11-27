import React from 'react';
import Main from './components/main';
import  SmileyResponse  from './components/SmileyResponse';
import { StackNavigator } from 'react-navigation';

export const Navigation = StackNavigator(
    {
        Main: { screen: Main },
        SmileyResponse: { screen: SmileyResponse }
    },
    {
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
          gesturesEnabled: false,
        }
        
      }
)


