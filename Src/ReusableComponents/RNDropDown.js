//import liraries
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BaseStyle from './BaseStyle';
import { moderateScale } from './Scaling';
import Theme from './Theme';

// create a component
const RNDropDown = ({
  //   label,
  Data,
  placeholder,
  icon,
  onSelect = () => {},
  imgPath = 'image',
  value = null,
  myDropStyle = {},
  myDropDownViewStyle = {},
  dropView = {},
  loading = false,
  loaderColor = '',
}) => {
  // console.log("Selected Value", !!value);
  const [ShowOption, setShowOption] = useState(false);
  // console.log("Drop Down Data", Data);
  const onSelectedItem = (item) => {
    setShowOption(false);
    onSelect(item);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setShowOption(!ShowOption);
        }}
        style={[styles.dropContainer, { ...myDropStyle }]}
      >
        {loading ? (
          <View style={{ ...myDropStyle, paddingVertical: 0 }}>
            <ActivityIndicator
              size="small"
              color={loaderColor || Theme.red}
              style={{ alignSelf: 'center' }}
            />
          </View>
        ) : (
          <>
            <View style={styles.contentRow}>
              {imgPath == 'image' ? <Image source={imgPath} style={styles.imageStyle} />:icon}
              <Text numberOfLines={1} style={styles.selectedText}>
                {value && Object.keys(value).length ? value.label || value.reason : placeholder}
              </Text>
            </View>
            {ShowOption == false ? (
              <Ionicons name="chevron-down" color={Theme.black} size={20} />
            ) : (
              <Ionicons name="chevron-up" color={Theme.black} size={20} />
            )}
          </>
        )}
      </TouchableOpacity>

      <View
        style={[
          styles.myView,
          {
            height: ShowOption ? BaseStyle.DEVICE_WIDTH * 0.4 : null,
            ...dropView,
          },
        ]}
      >
        {ShowOption == true ? (
          <ScrollView>
            {Data.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => onSelectedItem(item)}
                  style={[
                    styles.itemBtn,
                    {
                      backgroundColor:
                        value != null && item.value == value.value
                          ? Theme.orange
                          : Theme.white,
                      ...myDropDownViewStyle,
                    },
                  ]}
                >
                  {value != null && item.value == value.value ? (
                    <Ionicons
                      name="checkmark"
                      color={
                        value != null && item.value == value.value ? Theme.white : Theme.black
                      }
                      size={20}
                      style={{ marginRight: moderateScale(10) }}
                    />
                  ) : null}
                  <Text
                    key={item.value}
                    style={{
                      fontWeight: value != null && item.value == value.value ? 'bold' : null,
                      fontSize: 14,
                      color:
                        value != null && item.value == value.value ? Theme.white : Theme.black,
                    }}
                  >
                    {item.label || item.reason}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        ) : null}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(5),
  },
  dropContainer: {
    width: BaseStyle.DEVICE_WIDTH * 0.8,
    paddingVertical: moderateScale(10),
    backgroundColor: Theme.white,
    paddingHorizontal: moderateScale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 0,
    borderRadius: moderateScale(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(2),
  },
  itemBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: BaseStyle.DEVICE_WIDTH * 0.9,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
  },
  imageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: moderateScale(15),
  },
  myView: {
    width: BaseStyle.DEVICE_WIDTH * 0.8,
  },
  selectedText: {
    width: BaseStyle.DEVICE_WIDTH * 0.65,
    // ...FONTFAMILY.RubikRegular,
    fontSize: moderateScale(14),
    marginLeft:moderateScale(10),
    color:Theme.secondary
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default RNDropDown;
