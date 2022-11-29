import {StyleSheet} from 'react-native';
import BaseStyle from '../../ReusableComponents/BaseStyle';
import Fonts from '../../ReusableComponents/CustomeText';
import {moderateScale, scale} from '../../ReusableComponents/Scaling';
import Theme from '../../ReusableComponents/Theme';

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: Theme.lightGray,
    padding: moderateScale(15),
  },
  textSubHead: {
    ...Fonts.grayColor20Bold,
  },
  textPriceCart: {
    ...Fonts.grayColor18Bold,
    color: Theme.primary,
  },
  texts: {
    ...Fonts.blackColor14Medium,
    color: Theme.primary,
  },
  wraper: {
    width: '100%',
    backgroundColor:Theme.white,
    padding: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  filterButtonWrapper: {
    marginTop: scale(30),
    maxHeight: 100,
  },
  filterButton: {
    width: scale(78),
    height: scale(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BaseStyle.BorderRadius,
    padding: scale(4),
    backgroundColor: Theme.white,
  },
});
export default styles;
