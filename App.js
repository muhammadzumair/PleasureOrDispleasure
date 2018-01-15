import React from 'react';
import firebase from 'firebase';
import { Navigation } from './src/Navigation'
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';


// const {width, height} = Dimensions.get('window')

export default class App extends React.Component {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyBbcUA_DOSewEIHbS9la0uFgHFyD3uasfE",
      authDomain: "pleasureordispleasure.firebaseapp.com",
      databaseURL: "https://pleasureordispleasure.firebaseio.com",
      projectId: "pleasureordispleasure",
      storageBucket: "pleasureordispleasure.appspot.com",
      messagingSenderId: "725505693594"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}


