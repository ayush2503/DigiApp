import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useRoute} from '@react-navigation/native';
import {useGetProductsByIdQuery} from '../../../store/apis/productApi';
import Empty from '../../../components/Empty';
import Loader from '../../../components/Loader';
const Details = ({navigation}) => {
  const {params} = useRoute();
  const {data, error, isLoading, refetch} = useGetProductsByIdQuery(params?.id);
  //   console.log(params.id, data);
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Empty text={'Something went Wrong! Please try again.'} />;
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} style={{color: 'black'}} />
        </TouchableOpacity>
        <View>
          <Text style={styles.navlabel}>Card Details</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FAFAFA',
          padding: 14,
          elevation: 1,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 14,
          }}>
          <View style={{marginVertical: 14}}>
            <Text style={styles.label}>Title</Text>

            <Text style={styles.contentText}>{data?.data[0]?.name}</Text>
          </View>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.contentText}>{data?.data[0]?.description}</Text>
          <View style={{marginVertical: 14}}>
            <Text style={styles.label}>Portfolio Price</Text>

            <Text style={{fontSize: 14, lineHeight: 20, color: '#393939'}}>
              $ {data?.data[0]?.price}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Details;
const styles = StyleSheet.create({
  navContainer: {
    elevation: 5,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
  },
  navlabel: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    alignSelf: 'center',
    padding: 10,
  },
  label: {
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
    letterSpacing: 2,
    marginVertical: 10,
  },
  contentText: {fontSize: 14, lineHeight: 20, color: '#393939'},
});
