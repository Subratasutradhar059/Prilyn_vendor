import Theme from "../../ReusableComponents/Theme";
import { StyleSheet } from "react-native";
import Fonts from "../../ReusableComponents/CustomeText";
import { moderateScale, verticalScale } from "../../ReusableComponents/Scaling";
import BaseStyle from "../../ReusableComponents/BaseStyle";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Theme.lightGray,
        paddingHorizontal:moderateScale(20)
    },
    textHead:{
        ...Fonts.blackColor22Bold,
        marginVertical:verticalScale(10)
    },
    textSubHead:{
        ...Fonts.grayColor20Bold,
    },
    textVeryfy:{
        ...Fonts.blackColor18Bold,
        marginVertical:verticalScale(10)
    },
    Circle:{
        marginTop:verticalScale(100)
    },
    inlineTextInput:{
        marginVertical:verticalScale(20)
    },
    Buttoncontainer: {
        flexDirection: 'row',
        width: BaseStyle.DEVICE_WIDTH ,
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(20),
      },
      SignIn:{
        backgroundColor:Theme.secondary
      }
});
export default styles