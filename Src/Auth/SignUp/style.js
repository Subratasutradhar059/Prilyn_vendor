import {moderateScale, verticalScale} from '../../ReusableComponents/Scaling';
import Theme from '../../ReusableComponents/Theme';
import {StyleSheet} from 'react-native';
import Fonts from '../../ReusableComponents/CustomeText';
import BaseStyle from '../../ReusableComponents/BaseStyle';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.lightGray,
    alignItems: 'center',
    padding:moderateScale(15)
  },
  wrapper:{
    width:BaseStyle.DEVICE_WIDTH,
     paddingHorizontal: moderateScale(15),
  },
  textSubHead: {
    ...Fonts.blackColor18Bold,
    alignSelf: 'flex-start',
    marginLeft:10,
    marginVertical: verticalScale(10),
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    ...Fonts.blackColor16Medium,
    marginVertical: verticalScale(10),
  },
  textVeryfy:{
    ...Fonts.blackColor18Bold,
    marginVertical:verticalScale(10),
    textAlign:'center'
},
  whiteDot: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: Theme.gray,
    borderRadius: 100,
    marginHorizontal: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
