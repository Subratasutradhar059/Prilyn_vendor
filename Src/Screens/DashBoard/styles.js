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
    flex: 1,
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
  textbody:{
...Fonts.blackColor16Medium
  },
  textPara: {
    ...Fonts.blackColor14Regular,
  },
  cartWrapper: {
    marginTop: scale(30),
    maxHeight: 100,
  },
  scrollItem: {
    width: 150,
    height: 80,
    marginRight: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BaseStyle.BorderRadius,
    padding: scale(10),
    backgroundColor: Theme.white,
  },
  barChartWrapper: {
    padding: moderateScale(10),
    backgroundColor: Theme.white,
    borderRadius: BaseStyle.BorderRadius,
    width: '100%',
    marginVertical:verticalScale(20)
  },
  barChart: {
    width: '100%',
  },
  img:{
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  profileimg:{
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  wraper: {
    width: '100%',
    padding: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  checkSucess:{
    backgroundColor:Theme.lightGreen,
    width:50,
    height:50,
    borderRadius:BaseStyle.BorderRadius,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:5
  },
  seeAll:{
    backgroundColor:Theme.primary,
    minWidth:100,
    borderColor:'#fff',
    alignSelf:'flex-end',
    marginHorizontal:moderateScale(5)}
});
export default styles;
