//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../ReusableComponents/Scaling';
import Entypo from 'react-native-vector-icons/Entypo';
import Theme from '../../ReusableComponents/Theme';
import BaseStyle from '../../ReusableComponents/BaseStyle';
import Fonts from '../../ReusableComponents/CustomeText';
// create a component
const DisplayData = ({data}) => {
  console.log(data);
  const renderItem = item => {};
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={({item, index}) => index}
        // ListEmptyComponent={<ListEmptyComponent />}
        renderItem={({item, index}) => {
          return (
            <View style={styles.container}>
              <View style={styles.wraper}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={{
                      uri: item.images,
                    }}
                    style={{
                      width: 60,
                      height: 60,
                      resizeMode: 'cover',
                      borderRadius: 8,
                    }}
                  />
                  <View style={{marginLeft: 10}}>
                    <Text style={styles.bodyText}>{item.catogeryName}</Text>
                    <Text style={styles.textP}>{item.id}</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.textPrice}>{item.price}</Text>
                  <Entypo name="dots-three-vertical" size={25} />
                </View>
              </View>
              <View style={{flexDirection: 'row', margin: 10, width: '100%'}}>
                <TouchableOpacity style={[styles.brands,{
                    backgroundColor:item.orderStaus==="Pending" ? Theme.lightBlue:
                    item.orderStaus==="Shipped" ? Theme.lightGreen :
                    item.orderStaus==="Cancelled" ? Theme.lightRed :
                    Theme.white
                }]}>
                  <Text style={styles.textCart}>{item.orderStaus}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.brands}>
                  <Text style={styles.textCart}>{item.brandName}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.brands}>
                  <Text style={styles.textCart}>{item.productNum}</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Theme.white,
    marginTop: scale(15),
    borderRadius: BaseStyle.BorderRadius,
    paddingHorizontal:moderateScale(10),
    paddingVertical: verticalScale(8),
    alignItems: 'center',
  },
  wraper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    
  },
  brands: {
    paddingHorizontal: scale(10),
    paddingVertical: scale(5),
    marginRight: scale(15),
    borderRadius: BaseStyle.BorderRadiusSmall,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.themeLight,
  },
  textPrice: {
    ...Fonts.blackColor14Medium,
    color: Theme.primary,
  },
  textCart: {
    ...Fonts.blackColor14Medium,
  },
  bodyText:{
    ...Fonts.blackColor16Bold
  },
  textP:{
    ...Fonts.blackColor12Regular
  }
});

//make this component available to the app
export default DisplayData;
