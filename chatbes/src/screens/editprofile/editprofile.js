import { StyleSheet, TouchableOpacity, Text, View,Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import WrapperContainer from '../../components/wrapperContainer'
import HeaderComponent from '../../components/headerComponent'
import HorizontalLine from '../../components/horizontalLine'
import navigationStrings from '../../constants/navigationStrings'
import strings from '../../constants/lang'
import imagePath from '../../constants/imagePath'
import RoundImage from '../../components/RoundImage'
import { moderateScale, textScale } from '../../styles/responsiveSize'
import fontFamily from '../../styles/fontFamily'
import colors from '../../styles/colors'
import TextInputComp from '../../components/TextInputComp'
import ImagePicker from 'react-native-image-crop-picker';
import { androidCameraPermission } from '../../utils/permissions'
import styles from './styles'
import actions from '../../redux/actions'

const EditProfile = ({navigation, route }) => {

  const [state, setstate] = useState({
    image: '',
    name: '',
  })

  const {image , name } = state

  const { data } = route.params

  const updateState = (data) => setstate((state) => ({...state, ...data}))

  const leftCustomView = () => {
    return(
      <TouchableOpacity
      onPress={()=>navigation.goBack()}
      >
        <Image source={imagePath.icBack}/>
      </TouchableOpacity>
    )
  }

  const selectPhoto = async() => {
    const permissionStatus =  await androidCameraPermission();
    if (permissionStatus) {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(resp => {
        console.log(resp);
        updateState({image: resp.path});
      })
    }
  }

  const onDone = async() => {
    let apiData ={
      ...state,
       ...data
    }
    try{
      const res = await actions.signUp(apiData)
      if (!!res?.data) {
        navigation.navigate(navigationStrings.OTP_VERIFICATION,{data : res?.data})
      }
    }
    catch(err){
      console.log("err raised in signup api", err)
    }
   
    return;
    
  }

  return (
    <WrapperContainer containerStyle={{paddingHorizontal: 0}}>
        <HeaderComponent
          centerText={strings.EDIT_PROFILE}
          containerStyle={{paddingHorizontal: 8}}
          leftCustomView={leftCustomView}
          isLeftView={true}
          onPressRight={onDone}
      rightTextStyle={{
        color: name.length > 3 ? colors.lightBlue : colors.grey,
        fontFamily: name.length > 3 ? fontFamily.bold : fontFamily.regular,
      }}
      rightPressActive={name.length < 3}
          />
          <HorizontalLine/>
          <View style={{margin: moderateScale(16)}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <RoundImage
            onPress={selectPhoto}
            image={image}
            />
            <Text style={styles.descStyle} >{strings.ENTER_YOUR_NAME}</Text>
          </View>
          </View>
          <HorizontalLine />
          <TextInputComp 
          placeholder={strings.YOUR_NAME}
          onChangeText={text  => updateState({name: text})}
          />
            <HorizontalLine />
    </WrapperContainer>
  )
}

export default EditProfile


