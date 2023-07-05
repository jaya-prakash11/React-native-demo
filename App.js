import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  Linking,
} from 'react-native';

export default function App() {
  const [currentItems, setCurrentItems] = useState([
    {key: 1, item: 'item1'},
    {key: 2, item: 'item2'},
    {key: 3, item: 'item3'},
    {key: 4, item: 'item4'},
    {key: 5, item: 'item5'},
    {key: 6, item: 'item6'},
    {key: 7, item: 'item7'},
    {key: 8, item: 'item8'},
    {key: 9, item: 'item9'},
    {key: 10, item: 'item10'},
    {key: 11, item: 'item11'},
  ]);

  const onClickHandler = () => {
    setName('jp1');
    setSession({number: 7, title: 'style'});
    setCurrent(false);
  };
  return (
    <View style={styles.body}>
      {currentItems.map(res => {
        return (
          <View style={styles.item}>
            <Text style={styles.text}>{res.item}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 23,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
  },
  button: {
    width: 200,
    height: 40,
  },
});
