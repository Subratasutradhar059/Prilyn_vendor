//import liraries
import React, {Component} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Back from '../../ReusableComponents/Back';
import {moderateScale, scale} from '../../ReusableComponents/Scaling';
import Theme from '../../ReusableComponents/Theme';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
// create a component
const AllProduct = ({navigation}) => {
  const data = [
    {
      image:
        'https://i.pinimg.com/originals/ee/7d/cf/ee7dcfa3705d176360537af0b588b043.jpg',
      name: 'Saree',
      desc: 'This is 100% Cortto Made by india',
      oldPrice: '200',
      newPrice: '150',
    },
    {
      image:
        'https://4.bp.blogspot.com/-ZIobtG7JLeE/W6PBuq7ZsmI/AAAAAAAAJhs/6tHs1ydJTCcys9W9n1hOHqZMzccuDoz1wCLcBGAs/s1600/0eb298aae08a44e33618569d4b1ca74f.jpg',
      name: 'Saree',
      desc: 'This is 100% Cortto Made by india',
      oldPrice: '200',
      newPrice: '150',
    },
    {
      image:
        'https://assets.ajio.com/medias/sys_master/root/20220412/2sS1/62559111f997dd03e2587507/wedani_pink_floral_print_high-neck_top.jpg',
      name: 'Top',
      desc: 'This is 100% Cortto Made by india',
      oldPrice: '200',
      newPrice: '150',
    },
    {
      image:
        'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/13661/135373/Women-Tops-and-Blouses-Summer-Lace-Blouse-Shirt-Fashion-Women-Blouses-New-2018-Short-Sleeve-Lace__60090.1544087988.jpg?c=2?imbypass=on',
      name: 'Top',
      desc: 'This is 100% Cortto Made by india',
      oldPrice: '200',
      newPrice: '150',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300890696BEIGE_2_1024x1024.jpg?v=1657284951',
      name: 'Kurti',
      desc: 'This is 100% Cortto Made by india',
      oldPrice: '200',
      newPrice: '150',
    },
    {
      image: 'https://cf.shopee.in/file/5ffcd8d7d993c5f4a93961c1ab3a0c27',
      name: 'Plazo',
      desc: 'This is 100% Cortto Made by india',
      oldPrice: '200',
      newPrice: '150',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300890696BEIGE_2_1024x1024.jpg?v=1657284951',
      name: 'Kurti',
      desc: 'This is 100% Cortto Made by india',
      oldPrice: '200',
      newPrice: '150',
    },
    {
      image: 'https://cf.shopee.in/file/5ffcd8d7d993c5f4a93961c1ab3a0c27',
      name: 'Plazo',
      desc: 'This is 100% Cortto Made by india',
      oldPrice: '200',
      newPrice: '150',
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Feather
            name="arrow-left"
            size={25}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.textSubHead}>AllProduct</Text>
          <Feather name="search" size={25} />
        </View>
        <FlatList
          style={{marginVertical: 15}}
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={({item, index}) => index}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.catogery}>
                <Image source={{uri: item.image}} style={styles.img} />
                <View style={{marginLeft: moderateScale(10)}}>
                  <Text style={styles.texts}>{item.name}</Text>
                  <Text style={styles.detailedText}>{item.desc}</Text>
                  <Text
                    style={[
                      styles.texts,
                      {textDecorationLine: 'line-through'},
                    ]}>
                    {item.oldPrice}
                  </Text>
                  <Text style={[styles.texts, {color: Theme.primary}]}>
                    ₹ {item.newPrice}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default AllProduct;
