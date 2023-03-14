import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import WrapperContainer from '../../components/wrapperContainer'
import HeaderComponent from '../../components/headerComponent'
import strings from '../../constants/lang'
import navigationStrings from '../../constants/navigationStrings'
import HorizontalLine from '../../components/horizontalLine'
import imagePath from '../../constants/imagePath'
import styles from './styles'
import { moderateScaleVertical } from '../../styles/responsiveSize'
import OtpInputs from 'react-native-otp-inputs'
import actions from '../../redux/actions'

const OtpVerification = ({navigation, route}) => {

  const {data} = route?.params

  console.log("route params", data)

  const leftCustomView = () => {
    return(
      <TouchableOpacity
      onPress={()=>navigation.goBack()}
      >
        <Image source={imagePath.icBack}/>
      </TouchableOpacity>
    )
  }

  const handleChange  = async(value) =>{
    
    if(value.length >= 6){
      try{
        let res = await actions.otpVerify({
          otp: value,
          user_id: data._id
         })  
         console.log("api res", res)
      }
      catch(err){
        console.log("error raised in verify api", err)
        alert(err?.message)
      }
      
    }
    
  }

  return (
    <WrapperContainer containerStyle={{paddingHorizontal: 0}}>
    <HeaderComponent
      centerText={`${data?.selectedCountry?.dialCode} ${data?.phoneNumber}`}
      containerStyle={{paddingHorizontal: 8}}
      leftCustomView={leftCustomView}
      isLeftView={true}
      isRight={false}
      />
      <HorizontalLine/>
      
      <Text style={{...styles.descStyle, marginVertical: moderateScaleVertical(24)}}>{strings.WE_HAVE_SEND_YOU_AN_SMS}</Text>
      <Text style={styles.descStyle}>{strings.TO_COMPLETE_YOUR_PHONE_NUMBER}</Text>

<View style={{marginHorizontal: moderateScaleVertical(16)}}>
      <OtpInputs
          placeholder="*"
          handleChange={handleChange}
          numberOfInputs={6}
          style={{flexDirection:"row", justifyContent:'space-between', marginVertical: moderateScaleVertical(42)}}
          inputStyles={styles.inputStyle}
        />

    <View style={{marginTop: moderateScaleVertical(52)}}>
      <Text style={styles.bottomText} >{strings.RESEND_CODE}</Text>
    </View>
    </View>

</WrapperContainer>
  )
}

export default OtpVerification

