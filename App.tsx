import React from 'react';

import {
  View,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  ScrollView,
  Image,
} from 'react-native';
import FlatCards from './components/FlatCards';

export default function App() {
  const isDarkTheme = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <ScrollView horizontal={true}>
        <View style={style.container}>
          {['#ee5678', '#ee7889', '#ee9999', '#eeaaaa', '#eebbbb'].map(
            (clr, num) => (
              <FlatCards
                key={num}
                isDarkTheme={isDarkTheme}
                number={num}
                color={clr}
              />
            ),
          )}
        </View>
      </ScrollView>
      <View>
        <Image
          source={{uri: 'https://picsum.photos/200'}}
          width={200}
          height={200}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  darkTheme: {
    color: 'blue',
  },
  lightTheme: {
    color: '#000000',
  },
});
