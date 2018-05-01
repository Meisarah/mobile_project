
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

import { 
  Container, 
  Header, 
  Button, 
  Icon, 
  Left, 
  Right, 
  Body, 
  Title,
  Card,
  CardItem,
} from 'native-base';

import axios from 'axios';

export default class App extends Component {

  constructor(){
    super()
    this.state = {data: [], form: ''}
  }

  get = () => {
    var url = 'http://192.168.56.1:3210/data'
    axios.get(url)
    .then((ambilData) => {
      console.log(ambilData.data);
      this.setState({
        data: ambilData.data
      })
    })
  }

  render(){

    const datafinal = this.state.data.map((item, index) => {
      var nama = item.nama;
      var koleksi = item.koleksi;
      var deskripsi = item.deskripsi;
      var harga = item.harga;
      

      return <Card key={index}>
      <CardItem>
      <Left>
      <Image source={require('./shophijab4.jpg')}
      style={{height:200, width:370, flex:1}}/></Left>
      <Body>
      <Text>{koleksi} {nama}</Text> 
      <Text>{deskripsi}</Text>
      <Text>Rp.{harga},-</Text></Body>
      <Button transparent><Icon name='cart'/>
      <Text>Beli</Text></Button>
      </CardItem>
      </Card>
    })

    return(
      <Container>
        <Header>
            <Left><Button transparent><Icon name="menu"/></Button></Left>
            <Body><Title>Project</Title></Body>
            <Right>
            <TextInput placeholder= 'Cari produk'
                onChangeText={(x)=> {this.setState({form: x})}}
                value={this.state.form}/>
              <Button onPress={()=>{this.get()}} transparent><Icon name='search'/></Button>
              <Button transparent><Icon name='more'/></Button>
              </Right>
          </Header>
            {datafinal}
          
        </Container>
    )
  }
}
 


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
