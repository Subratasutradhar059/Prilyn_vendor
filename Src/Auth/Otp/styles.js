import {StyleSheet} from 'react-native';
import Fonts from '../../ReusableComponents/CustomeText';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../ReusableComponents/Scaling';
import Theme from '../../ReusableComponents/Theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.lightGray,
    paddingHorizontal: moderateScale(20),
  },
  textSubHead: {
    ...Fonts.grayColor20Bold,
    textAlign: 'center',
    marginVertical: verticalScale(10),
    lineHeight: moderateScale(33),
  },
  textVeryfy: {
    ...Fonts.blackColor18Bold,
    marginVertical: verticalScale(10),
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 60,
    marginTop: 10,
  },
  timer: {
    ...Fonts.blackColor18Bold,
    color: Theme.primary,
    textAlign: 'center',
    marginVertical: verticalScale(10),
  },
});
export default styles;
