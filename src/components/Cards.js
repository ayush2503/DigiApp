import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Cards = ({item, onclick, index}) => {
  return (
    <TouchableOpacity key={item._id} onPress={() => onclick(item._id)}>
      <View style={styles.container}>
        <View style={styles.lftbox}>
          <Text style={{color: '#fff', padding: 5, fontSize: 16}}>
            {index + 1}
          </Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={styles.label}>{item.name}</Text>
          <Text style={{color: '#000', padding: 5}}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;

const styles = StyleSheet.create({
  label: {
    color: '#698296',
    padding: 5,
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 2,
  },
  lftbox: {
    padding: 5,
    backgroundColor: '#ABD9CE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    marginVertical: 5,

    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
  },
});
