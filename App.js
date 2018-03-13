import React from 'react';
import firebase from 'firebase';
import { Navigation } from './src/Navigation'
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
// import { Font } from 'expo';

// const {width, height} = Dimensions.get('window')

export default class App extends React.Component {

  async componentDidMount() {
    await Expo.Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
    }

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


