import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  Linking,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';

export default function App() {
  const [currentItems, setCurrentItems] = useState([
    {name: 'item1'},
    {name: 'item2'},
    {name: 'item3'},
    {name: 'item4'},
    {name: 'item5'},
    {name: 'item6'},
    {name: 'item7'},
    {name: 'item8'},
    {name: 'item9'},
    {name: 'item10'},
    {name: 'item11'},
    {name: 'item12'},
    {name: 'item13'},
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const refreshHanlde = () => {
    setRefreshing(true);
    setCurrentItems([...currentItems, {name: 'item15'}]);
    setRefreshing(false);
  };

  const DATA = [
    {
      title: 'Title1',
      data: ['abc-1', 'abc-1', 'abc-1'],
    },
    {
      title: 'Title2',
      data: ['abc-2', 'abc-2', 'abc-2'],
    },
    {
      title: 'Title3',
      data: ['abc-3', 'abc3', 'abc-3'],
    },
    {
      title: 'Title4',
      data: ['abc-4', 'abc-4', 'abc-4'],
    },
    {
      title: 'Title5',
      data: ['abc-5', 'abc-5', 'abc-5'],
    },
  ];

  return (
    <View style={styles.body}>
      <SectionList
        keyExstractor={(item, index) => index.toString()}
        sections={DATA}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )}
      />
    </View>
    // <View style={styles.body}>
    //   <ScrollView
    //     refreshControl={
    //       <RefreshControl
    //         refreshing={refreshing}
    //         onRefresh={() => refreshHanlde()}
    //       />
    //     }>
    //     {currentItems.map(res => {
    //       return (
    //         <View style={styles.item} key={res.key}>
    //           <Text style={styles.text}>{res.item}</Text>
    //         </View>
    //       );
    //     })}
    //   </ScrollView>
    // </View>
  );
}

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 23,
    backgroundColor: 'blue',
    margin: 3,
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
