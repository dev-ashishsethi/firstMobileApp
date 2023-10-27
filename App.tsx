import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

export default function App() {
  const isDarkTheme = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text style={isDarkTheme ? style.darkTheme : style.lightTheme}>
          hello world
        </Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ff0000',
  },
  darkTheme: {
    color: 'blue',
  },
  lightTheme: {
    color: '#000000',
  },
});
