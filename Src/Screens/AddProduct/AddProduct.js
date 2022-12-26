//import liraries
import React, {Component, useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomTextInput from '../../ReusableComponents/CustomTextInput';
import RNDropDown from '../../ReusableComponents/RNDropDown';
import styles from './styles';
// create a component
const AddProduct = ({navigation}) => {
  const data = [
    {
      label: 'India',
      value: 'India',
    },
    {
      label: 'Indiaaa',
      value: 'Indiaaaa',
    },
  ];
  const [product, setProduct] = useState('');
  const onChange = useCallback(
    product => {
      setProduct(product);
    },
    [product],
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.selectField}>
        <View style={styles.header}>
          <AntDesign
            style={styles.back}
            name="arrowleft"
            size={25}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.textSubHead}>Add Product</Text>
          <TouchableOpacity style={styles.saveButton} onPress={()=>{navigation.navigate("DashBoard")}}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>

        {/* SelectField */}

        <RNDropDown
          Data={data}
          onSelect={onChange}
          value={product}
          placeholder={'Product Name'}
          imgPath={'icon'}
          icon={<FontAwesome5 name="box-tissue" size={22} />}
          dropView={styles.dropView}
          myDropStyle={styles.dropStyle}
          myDropDownViewStyle={styles.myDropDownViewStyle}
        />
        <RNDropDown
          Data={data}
          placeholder={'Product Barcode'}
          imgPath={'icon'}
          icon={<FontAwesome5 name="barcode" size={22} />}
          dropView={styles.dropView}
          myDropStyle={styles.dropStyle}
          myDropDownViewStyle={styles.myDropDownViewStyle}
        />

        <CustomTextInput placeholder={'Description Details'} />

        <Text style={styles.textSubHead}>Add Product Image</Text>

        <TouchableOpacity style={styles.cameraContainer}>
          <MaterialCommunityIcons name="camera-plus" size={25} />
        </TouchableOpacity>
        <Text style={styles.textSubHead}>General info</Text>

        <RNDropDown
          Data={data}
          placeholder={'Category'}
          imgPath={'icon'}
          icon={<FontAwesome name="list-ul" size={22} />}
          dropView={styles.dropView}
          myDropStyle={styles.dropStyle}
          myDropDownViewStyle={styles.myDropDownViewStyle}
        />
        <RNDropDown
          Data={data}
          placeholder={'Sub Category '}
          imgPath={'icon'}
          icon={<FontAwesome name="list-ul" size={22} />}
          dropView={styles.dropView}
          myDropStyle={styles.dropStyle}
          myDropDownViewStyle={styles.myDropDownViewStyle}
        />
        <RNDropDown
          Data={data}
          placeholder={'Brand'}
          imgPath={'icon'}
          icon={<FontAwesome name="tags" size={22} />}
          dropView={styles.dropView}
          myDropStyle={styles.dropStyle}
          myDropDownViewStyle={styles.myDropDownViewStyle}
        />
        <RNDropDown
          Data={data}
          placeholder={'unit'}
          imgPath={'icon'}
          icon={<AntDesign name="sharealt" size={22} />}
          dropView={styles.dropView}
          myDropStyle={styles.dropStyle}
          myDropDownViewStyle={styles.myDropDownViewStyle}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default AddProduct;
