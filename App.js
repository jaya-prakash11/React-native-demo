import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button, Linking } from 'react-native';


export default function App() {
  const [name, setName] = useState('jp');
  const [session, setSession] = useState({ number: 6, title: 'state' });
  const [current , setCurrent ] = useState(true)
  const onClickHandler = () => {
    setName('jp1')
    setSession({ number: 7, title: 'style' })
    setCurrent(false)
  }
  return (
      <View style={styles.body}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.button}>
        <Button
          title="youtube channel"
          onPress={onClickHandler}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  body: {
    width:'100%',
    height:'50%',
    backgroundColor: '#ffff',
    alignItems: 'center',
    borderWidth: 10,
    borderColor:'red',
    justifyContent: 'center',
    alignItems:'center'
  },
  text:{
    color: 'black',
    fontSize: 40,
    fontStyle: 'italic',
    margin:10
  },
  button: {
    width: 200,
    height:40
  }
});
