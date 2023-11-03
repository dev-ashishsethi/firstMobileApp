import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlatCards = ({isDarkTheme, number, color}) => {
  return (
    <View style={{...style.card, backgroundColor: color}}>
      <Text style={style.textStyle}>Card {number}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    margin: 10,
    height: 100,
    color: 'white',
  },
  textStyle: {
    fontSize: 19,
  },
});

export default FlatCards;
