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
          img:{
            width: 60,
            height: 60,
            resizeMode: 'cover',
            borderRadius: 8,
          },
          notifiContain:{
            width:40,
            height:40,
            backgroundColor:Theme.white,
            justifyContent:'center',
            alignItems:"center",
            borderRadius:50,
            marginHorizontal:moderateScale(5)
        }
});
export default styles