//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Back from '../../ReusableComponents/Back';
import Theme from '../../ReusableComponents/Theme';
import DisplayData from './DisplayData';
import styles from './styles';
// create a component
const Order = ({navigation}) => {
  const orderFilter = [
    {orderType: 'AllOrders'},
    {orderType: 'Pending'},
    {orderType: 'Shipped'},
    {orderType: 'Cancelled'},
  ];

  const [orderType, setOrderType] = useState('AllOrders');
  const [data, setData] = useState('');
  const finalData = [
    {
      orderStaus: 'Pending',
      images:
        'https://cdn2.stylecraze.com/wp-content/uploads/2017/06/25-Types-Of-Kurtis-And-Styling-Tips-Every-Woman-Should-Know-2.jpg',
      catogeryName: 'Kurti & Sets',
      price: '₹ 500',
      id: '#2564DDE44',
      brandName: 'GUCCI',
      productNum: '60070 - NY',
    },
    {
      orderStaus: 'Pending',
      images:
        'https://cdn2.stylecraze.com/wp-content/uploads/2017/06/25-Types-Of-Kurtis-And-Styling-Tips-Every-Woman-Should-Know-2.jpg',
      catogeryName: 'Kurti & Sets',
      price: '₹ 500',
      id: '#2564DDE44',
      brandName: 'GUCCI',
      productNum: '60070 - NY',
    },
    {
      orderStaus: 'Shipped',
      images:
        'https://cdn2.stylecraze.com/wp-content/uploads/2017/06/25-Types-Of-Kurtis-And-Styling-Tips-Every-Woman-Should-Know-2.jpg',
      catogeryName: 'Kurti & Sets',
      price: '₹ 500',
      id: '#2564DDE44',
      brandName: 'GUCCI',
      productNum: '60070 - NY',
    },
    {
      orderStaus: 'Cancelled',
      images:
        'https://cdn2.stylecraze.com/wp-content/uploads/2017/06/25-Types-Of-Kurtis-And-Styling-Tips-Every-Woman-Should-Know-2.jpg',
      catogeryName: 'Kurti & Sets',
      price: '₹ 500',
      id: '#2564DDE44',
      brandName: 'GUCCI',
      productNum: '60070 - NY',
    },
    {
      orderStaus: 'Shipped',
      images:
        'https://cdn2.stylecraze.com/wp-content/uploads/2017/06/25-Types-Of-Kurtis-And-Styling-Tips-Every-Woman-Should-Know-2.jpg',
      catogeryName: 'Kurti & Sets',
      price: '₹ 500',
      id: '#2564DDE44',
      brandName: 'GUCCI',
      productNum: '60070 - NY',
    },
  ];

  useEffect(() => {
    let newdata = [];

    if (orderType === 'AllOrders') {
      newdata = finalData;
    } else {
      newdata = finalData.filter(item => item.orderStaus == orderType);
    }
    setData(newdata);
    
  }, [orderType]);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Back
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.textSubHead}>Orders</Text>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            {orderFilter.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setOrderType(item.orderType);
                  }}
                  style={[
                    styles.filterButton,
                    {
                      backgroundColor:
                        item.orderType === 'AllOrders'
                          ? Theme.white
                          : item.orderType === 'Shipped'
                          ? Theme.lightGreen
                          : item.orderType === 'Cancelled'
                          ? Theme.lightRed
                          : item.orderType === 'Pending'
                          ? Theme.lightBlue
                          : Theme.white,
                    },
                  ]}>
                  <Text style={styles.texts}>{item.orderType}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {orderType === 'AllOrders' ? <DisplayData data={data} /> : null}
          {orderType === 'Shipped' ? <DisplayData data={data} /> : null}
          {orderType === 'Cancelled' ? <DisplayData data={data} /> : null}
          {orderType === 'Pending' ? <DisplayData data={data} /> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Order;
