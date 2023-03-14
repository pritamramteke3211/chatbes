import { StyleSheet, Text, TouchableOpacity, View,Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../components/wrapperContainer';
import strings from '../../constants/lang';
import styles from './styles';
import HeaderComponent from '../../components/headerComponent';
import HorizontalLine from '../../components/horizontalLine';
import imagePath from '../../constants/imagePath'
import colors from '../../styles/colors';
import CountryPicker from '../../components/countryPicker';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import navigationStrings from '../../constants/navigationStrings'
import fontFamily from '../../styles/fontFamily';


const PhoneNumber = ({navigation}) => {

  const [state, setstate] = useState({
    selectedCountry: {
    "name": "India",
    "dialCode": "+91",
    "isoCode": "IN",
    "flag": "https://cdn.kcak11.com/CountryFlags/countries/in.svg"
    },
    phoneNumber: '',
  })

  const {selectedCountry , phoneNumber } = state
  const updateState = (data) => setstate((state) => ({...state, ...data}))


  const fetchCountry = (data) =>{
    updateState({selectedCountry: data})
  }

  const leftCustomView = () => {
    return(
      <TouchableOpacity
      onPress={()=>navigation.goBack()}
      >
        <Image source={imagePath.icBack}/>
      </TouchableOpacity>
    )
  }

  const onDone = () => {
    navigation.navigate(navigationStrings.EDIT_PROFILE,{data : state})
  }

  return (
    <WrapperContainer containerStyle={{paddingHorizontal: 0}}>
      <HeaderComponent
      centerText={strings.ENTER_YOUR_PHONE_NUMBER}
      containerStyle={{paddingHorizontal: 8}}
      leftCustomView={leftCustomView}
      isLeftView={true}
      onPressRight={onDone}
      rightTextStyle={{
        color: phoneNumber.length > 8 ? colors.lightBlue : colors.grey,
        fontFamily: phoneNumber.length > 8 ? fontFamily.bold : fontFamily.regular,
      }}
      rightPressActive={phoneNumber.length < 9}
      />
      <Text style={styles.descStyle} >{strings.CHATBES_WILL_SEND}</Text>
      <HorizontalLine/>

      <CountryPicker 
      fetchCountry={fetchCountry}
      value={selectedCountry?.name}
      />
      <View style={styles.phoneInputStyle}>
        <Text style={styles.dialCodeStyle}>{selectedCountry?.dialCode}</Text>
      <View style={{flex:1}}>
      <TextInput
      keyboardType='phone-pad'
      placeholder="Enter your phone number"
      style={styles.inputStyle}
      onChangeText={text => updateState({phoneNumber: text})}
      />
      </View>
      </View>
    </WrapperContainer>
  )
}

export default PhoneNumber

