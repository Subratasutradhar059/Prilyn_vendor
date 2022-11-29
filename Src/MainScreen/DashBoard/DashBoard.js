//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import Theme from '../../ReusableComponents/Theme';
import Barchart from '../../ReusableComponents/Barchart';
import Back from '../../ReusableComponents/Back';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GlobalButton from '../../ReusableComponents/GlobalButton';
import {moderateScale, verticalScale} from '../../ReusableComponents/Scaling';
// create a component
const DashBoard = ({navigation}) => {
  const barData = [
    {value: 200, label: 'S'},
    {value: 500, label: 'M'},
    {value: 500, label: 'T', frontColor: '#ffc69d'},
    {value: 745, label: 'W', frontColor: Theme.primary},
    {value: 320, label: 'T'},
    {value: 600, label: 'F', frontColor: '#ffc69d'},
    {value: 200, label: 'S'},
  ];
  const headerData = [
    {amount: 200, catogery: 'sales today'},
    {amount: 2000, catogery: 'sales this weak'},
    {amount: 500, catogery: 'sales yesterday'},
    {amount: 250, catogery: 'unit'},
    {amount: 2000, catogery: 'sales today'},
    {amount: 200, catogery: 'sales today'},
    {amount: 200, catogery: 'sales today'},
  ];
  const newOrder = [
    {
      image:
        'https://i.pinimg.com/564x/78/c3/7d/78c37d95eb426bc6dd843bae93769474.jpg',
      productName: 'Ladies Kurti',
      productId: '# AGTY5521',
    },
    {
      image:
        'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17413232/2022/3/17/c861897a-f6d5-40fc-8336-a007cce0bede1647511510301-Anubhutee-Women-Kurtis-6081647511509773-1.jpg',
      productName: 'Ladies Kurti',
      productId: '# AGTY5521',
    },
    {
      image:
        'https://cdn2.stylecraze.com/wp-content/uploads/2017/06/25-Types-Of-Kurtis-And-Styling-Tips-Every-Woman-Should-Know-2.jpg',
      productName: 'Ladies Kurti',
      productId: '# AGTY5521',
    },
    {
      image:
        'https://rukminim1.flixcart.com/image/714/857/jynat8w0/kurti/p/3/k/xl-ku184-mahageeta-original-imafgt8drbzycdxz.jpeg',
      productName: 'Ladies Kurti',
      productId: '# AGTY5521',
    },
    {
      image:
        'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10356511/2019/8/8/a28f9ccb-c0d7-4e66-87f0-e639f157ff2d1565263388836-Libas-Women-Kurta-Sets-571565263387250-1.jpg',
      productName: 'Ladies Kurti',
      productId: '# AGTY5521',
    },
    {
      image:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13400244/2021/2/11/36aafe97-e263-4ea4-83a5-e04e63a7a6b21613024342370-Nehamta-Women-Beige--Red-Embroidered-A-Line-Kurta-9731613024-1.jpg',
      productName: 'Ladies Kurti',
      productId: '# AGTY5521',
    },
    {
      image: 'https://m.media-amazon.com/images/I/81qAR3aldhL._UY550_.jpg',
      productName: 'Ladies Kurti',
      productId: '# AGTY5521',
    },
    {
      image:
        'https://i.pinimg.com/564x/78/c3/7d/78c37d95eb426bc6dd843bae93769474.jpg',
      productName: 'Ladies Kurti',
      productId: '# AGTY5521',
    },
    {
      image:
        'https://cdn2.stylecraze.com/wp-content/uploads/2017/06/25-Types-Of-Kurtis-And-Styling-Tips-Every-Woman-Should-Know-2.jpg',
      productName: 'Ladies Kurti',
      productId: '# AGTY5521',
    },
    {
      image:
        'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17413232/2022/3/17/c861897a-f6d5-40fc-8336-a007cce0bede1647511510301-Anubhutee-Women-Kurtis-6081647511509773-1.jpg',
      productName: 'Ladies Kurti',
      productId: '# AGTY5521',
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Feather
              name="arrow-left"
              size={25}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <Text style={styles.textSubHead}>Dashboard</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Image
                source={require('../../Assets/Images/user.png')}
                style={styles.profileimg}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.cartWrapper}>
            {headerData.map(item => {
              return (
                <TouchableOpacity style={styles.scrollItem}>
                  <Text style={styles.textPriceCart}>₹ {item.amount}</Text>
                  <Text style={styles.textbody}>{item.catogery}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View style={styles.barChartWrapper}>
            <View style={styles.wraper}>
              <Text style={styles.textbody}>Product Sales</Text>
              <Entypo name="dots-three-vertical" size={25} />
            </View>

            <View style={styles.wraper}>
              <View>
                <Text style={styles.textPriceCart}>₹ 49.5K </Text>
                <Text style={styles.texts}>Last Week</Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.scrollItem,
                  {backgroundColor: Theme.lightRed, width: 90, height: 60},
                ]}>
                <Text style={styles.textPriceCart}>↓ 42%</Text>
                <Text>Prev Week</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.scrollItem,
                  {backgroundColor: Theme.lightGreen, width: 90, height: 60},
                ]}>
                <Text style={[styles.textPriceCart, {color: Theme.green}]}>
                  ↑ 22%
                </Text>
                <Text>Overall</Text>
              </TouchableOpacity>
            </View>
            <Barchart data={barData} inlinestyle={styles.barChart} />
            <Text
              style={[
                styles.textbody,
                {textAlign: 'center', marginTop: moderateScale(10)},
              ]}>
              Monthly Data
            </Text>
          </View>

          {/* Orders */}
          <View style={[styles.barChartWrapper, {marginTop: verticalScale(0)}]}>
            <View style={styles.wraper}>
              <Text style={styles.textbody}>Top Ten New Orders</Text>
              <Entypo
                name="dots-three-vertical"
                size={25}
                onPress={() => {
                  alert('New Order Page Will Open');
                }}
              />
            </View>

            {/* imageData */}
            {newOrder.map(item => {
              return (
                <View style={styles.wraper}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      style={styles.img}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text style={styles.textbody}>{item.productName}</Text>
                      <Text style={styles.textPara}>{item.productId}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.checkSucess}>
                      <AntDesign name="check" size={20} color={Theme.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.checkSucess,
                        {backgroundColor: Theme.lightRed},
                      ]}>
                      <AntDesign name="close" size={20} color={Theme.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
            <GlobalButton
              inlineStyle={styles.seeAll}
              onPress={() => {
                navigation.navigate('AllProduct');
              }}
              title="All Products"
              titleStyle={{color: '#fff'}}
            />
            <GlobalButton
              inlineStyle={styles.seeAll}
              onPress={() => {
                navigation.navigate('Order');
              }}
              title="All Orders"
              titleStyle={{color: '#fff'}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default DashBoard;
