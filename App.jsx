/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {useGetProductsQuery} from './src/store/apis/productApi';
import Config from 'react-native-config';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation';
import AppStack from './src/navigation/AppStack';

function App() {
  return (
    // <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
    <>
      <StatusBar barStyle={'light-content'} />
      <Provider store={store}>
        <Navigator />
      </Provider>
    </>
    // </SafeAreaView>
  );
}
// <SafeAreaView style={backgroundStyle}>
//   <StatusBar
//     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//     backgroundColor={backgroundStyle.backgroundColor}
//   />

// </SafeAreaView>
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
