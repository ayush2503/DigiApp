import {View, Text} from 'react-native';
import React from 'react';

const Empty = ({text}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
        {text ? text : ' No data found !!'}
      </Text>
    </View>
  );
};

export default Empty;
