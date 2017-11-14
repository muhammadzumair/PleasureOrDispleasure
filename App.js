import React from 'react';
import { StyleSheet, Text,Dimensions, View, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Main from './src/main';
import { VeryHappy } from './src/VeryHappy'
import { Happy } from './src/Happy'
import { Sad } from './src/Sad'
import { Angry } from './src/Angry'
import firebase from 'firebase';
import { Navigation } from './src/Navigation'

const {width, height} = Dimensions.get('window')

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
    return (
      <Navigation />
      // <View style={styles.container}>
      //     <View style={{ flexDirection: 'row' }}>
      //         <View style={{ width: '50%' }}>
      //           <TouchableOpacity style={{ alignSelf: 'center' }}>
      //             <Image style={styles.smilye}
      //               source={require('./assets/vhappy.png')}
      //             />
      //           </TouchableOpacity>
      //         </View>
      //         <View style={{ width: '50%' }}>
      //           <TouchableOpacity style={{ alignSelf: 'center' }}>
      //             <Image style={styles.smilye}
      //               source={require('./assets/happy.png')}
      //             />
      //           </TouchableOpacity>
      //         </View>
      //     </View>

      //     <View style={{ flexDirection: 'row' }}>
      //         <View style={{ width: '50%' }}>
      //           <TouchableOpacity style={{ alignSelf: 'center' }}>
      //             <Image style={styles.smilye}
      //               source={require('./assets/sad.png')}
      //             />
      //           </TouchableOpacity>
      //         </View>
      //         <View style={{ width: '50%' }}>
      //           <TouchableOpacity style={{ alignSelf: 'center' }}>
      //             <Image style={styles.smilye}
      //               source={require('./assets/angry.png')}
      //             />
      //           </TouchableOpacity>
      //         </View>
      //     </View>
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexWrap: 'wrap'
//   },
//   smilye: {
//     // flex: 1,
//     width: 180,
//     height: 180,
//     // resizeMode: 'contain'
//   }
// });
