import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  useGetProductsByTxtQuery,
  useGetProductsQuery,
} from '../../../store/apis/productApi';
import Cards from '../../../components/Cards';
import Loader from '../../../components/Loader';
import Empty from '../../../components/Empty';

const ListScreen = ({navigation}) => {
  const [page, setPage] = useState(0);
  const {data, error, isLoading, refetch} = useGetProductsQuery(page);

  const refreshHandler = useCallback(() => {
    refetch(0);
    setPage(0);
  }, []);
  const onCardclick = useCallback(id => {
    navigation.navigate('Details', {id: id});
  }, []);

  const renderards = ({item, index}) => {
    return <Cards item={item} index={index} onclick={onCardclick} />;
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.navContainer}>
        <Text style={styles.navTxt}>People</Text>
      </View>

      <View style={styles.container}>
        {isLoading ? (
          <Loader />
        ) : (
          <FlatList
            data={data?.data}
            extraData={data}
            contentContainerStyle={{
              flexGrow: 1,
              padding: 5,
            }}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={refreshHandler}
              />
            }
            onEndReachedThreshold={0.1}
            onEndReached={() => setPage(val => val + 1)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderards}
            ListEmptyComponent={() => <Empty />}
          />
        )}
      </View>
    </View>
  );
};

export default ListScreen;
const styles = StyleSheet.create({
  navContainer: {
    //   width: '100%',
    elevation: 5,
    backgroundColor: 'white',
    padding: 10,
  },
  navTxt: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    padding: 5,
    alignSelf: 'center',
  },
  container: {flex: 1, backgroundColor: '#fafafa', padding: 10},
});
