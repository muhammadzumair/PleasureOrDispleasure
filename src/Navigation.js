import React from 'react';
import Main from './components/main';
import  SmileyResponse  from './components/SmileyResponse';
import Suggestion from './components/Suggestion';
import Comment from './components/Comment';
import ThankYou from './components/ThankYou';
import FirstScreen from './components/FirstScreen';
import { StackNavigator } from 'react-navigation';

export const Navigation = StackNavigator(
    {
        FirstScreen: {screen: FirstScreen},
        Main: { screen: Main },
        SmileyResponse: { screen: SmileyResponse },
        Suggestion: {screen: Suggestion},
        Comment: {screen: Comment},
        ThankYou: {screen: ThankYou}
    },
    {
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
          gesturesEnabled: false,
        }
        
      }
)


