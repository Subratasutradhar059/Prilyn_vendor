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
    width: BaseStyle.DEVICE_WIDTH,
    height: BaseStyle.DEVICE_HEIGHT,
    alignItems: 'center',
    backgroundColor: Theme.lightGray,
    padding: moderateScale(15),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  textSubHead: {
    ...Fonts.grayColor20Bold,
  },
  textPriceCart: {
    ...Fonts.grayColor18Bold,
    color: Theme.primary,
  },
  texts: {
    ...Fonts.blackColor16Medium,
  },
  detailedText: {...Fonts.blackColor12Regular},
  img: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  wraper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  catogery: {
    backgroundColor: Theme.white,
    borderRadius: BaseStyle.BorderRadiusSmall,
    width: BaseStyle.DEVICE_WIDTH * 0.9,
    flexDirection: 'row',
    padding: moderateScale(5),
    marginVertical: verticalScale(8),
  },
});
export default styles;
