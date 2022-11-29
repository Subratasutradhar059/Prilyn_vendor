import { StyleSheet } from "react-native";
import Fonts from "../../ReusableComponents/CustomeText";
import { moderateScale, verticalScale } from "../../ReusableComponents/Scaling";
import Theme from "../../ReusableComponents/Theme";
const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Theme.lightGray,
    padding: moderateScale(15),
  },
  textSubHead: {
    ...Fonts.grayColor20Bold,
  },
  textBody: {
    ...Fonts.grayColor18Bold,
    color: Theme.primary,
  },
  textP: {
    ...Fonts.blackColor16Medium,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginTop:moderateScale(20),
    marginVertical:verticalScale(10)
  },
  inputContainer:{
    marginTop:moderateScale(30)
  }
});
export default styles