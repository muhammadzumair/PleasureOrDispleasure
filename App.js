import React from 'react';
import firebase from 'firebase';
import { Navigation } from './src/Navigation'
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers'

// const {width, height} = Dimensions.get('window')

export default class App extends React.Component {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyBxMOwhh25N1ybeeFPQNjueYixqLYTVZx0",
      authDomain: "collegeinquiryagent.firebaseapp.com",
      databaseURL: "https://collegeinquiryagent.firebaseio.com",
      projectId: "collegeinquiryagent",
      storageBucket: "collegeinquiryagent.appspot.com",
      messagingSenderId: "303887614277"
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


