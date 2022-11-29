import {StyleSheet} from 'react-native';
import BaseStyle from '../../ReusableComponents/BaseStyle';
import Fonts from '../../ReusableComponents/CustomeText';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../ReusableComponents/Scaling';
import Theme from '../../ReusableComponents/Theme';

const styles = StyleSheet.create({
  container: {
    height: BaseStyle.DEVICE_HEIGHT,
    width: BaseStyle.DEVICE_WIDTH,
    alignItems: 'center',
    backgroundColor: Theme.lightGray,
    padding: moderateScale(15),
  },
  textSubHead: {
    ...Fonts.grayColor20Bold,
  },
  saveButton: {
    backgroundColor: Theme.primary,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    borderRadius: BaseStyle.BorderRadiusSmall,
  },
  btnText: {
    ...Fonts.blackColor16Bold,
    color: Theme.white,
    textAlign: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:verticalScale(10)
  },
  selectField: {
    marginBottom: moderateScale(10),
    width:BaseStyle.DEVICE_WIDTH,
    paddingHorizontal:moderateScale(15)
  },
  dropView: {
    width: BaseStyle.DEVICE_WIDTH * 0.9,
    backgroundColor: Theme.white,
    marginVertical:verticalScale(5)
  },
  dropStyle: {
    width: BaseStyle.DEVICE_WIDTH * 0.9,
    alignSelf: 'flex-start',
    paddingVertical: moderateScale(15),
    borderRadius: moderateScale(5),
  },
  myDropDownViewStyle: {
    width: BaseStyle.DEVICE_WIDTH * 0.9,
  },
  cameraContainer:{
    width:100,
    height:100,
    marginVertical:verticalScale(10),
    borderRadius:BaseStyle.BorderRadiusSmall,
    backgroundColor:Theme.white,
    justifyContent:'center',
    alignItems:'center',
  }
});
export default styles;
