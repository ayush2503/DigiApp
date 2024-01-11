import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={'#004997'} />
    </View>
  );
};

export default Loader;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
