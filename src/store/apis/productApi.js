import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import {RNToasty} from 'react-native-toasty';

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://digi-task-hcttr6pml-ayush2503s-projects.vercel.app/api/v1`,
  }),
  tagTypes: ['Product'],
  endpoints: builder => ({
    getProducts: builder.query({
      query: page => {
        return {
          url: 'products/',
          params: {page: page, limit: 20},
        };
      },
      async onQueryStarted(id, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
        } catch (err) {
          // `onError` side-effect
          // dispatch(messageCreated('Error fetching posts!'))
          RNToasty.Error({
            title: 'Something Went wrong !!',
            duration: 1,
          });
          console.log('error... ', err);
        }
      },
      serializeQueryArgs: ({queryArgs, endpointName, endpointDefinition}) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        console.log('newItems', currentCache);
        currentCache.data.push(...newItems.data);
        // console.log(object);
        return currentCache;
      },
      forceRefetch({currentArg, previousArg}) {
        console.log('ForceRefetch', currentArg, previousArg);
        return currentArg !== previousArg;
      },
    }),
    getProductsById: builder.query({
      query: id => `products/${id}`,
    }),
    // getProductsByTxt: builder.query({
    //   //   query: id => 'products/search',
    //   query: val => {
    //     console.log(val, 'inside');
    //     return {
    //       url: 'products/search',
    //       params: {searchtext: val},
    //     };
    //   },
    //   async onQueryStarted(id, {dispatch, queryFulfilled}) {
    //     try {
    //       const {data} = await queryFulfilled;
    //       console.log('123456',id);
    //     } catch (err) {
    //       // `onError` side-effect
    //       // dispatch(messageCreated('Error fetching posts!'))
    //       RNToasty.Error({
    //         title: 'Something Went wrong !!',
    //         duration: 1,
    //       });
    //       console.log('error... ', err);
    //     }
    //   },
    // }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  //   useGetProductsByTxtQuery,
} = productApi;
