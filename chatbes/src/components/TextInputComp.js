import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { Fragment } from 'react'
import { moderateScale, textScale } from '../styles/responsiveSize'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'

const TextInputComp = ({
    placeholder="",
    inputStyle={},
    onChangeText=()=>{},
    ...props
}) => {

  return (
       <Fragment>
      <TextInput
      placeholder={placeholder}
      style={{...styles.inputStyle,...inputStyle}}
      onChangeText={onChangeText}
      {...props}
      />
      </Fragment>
    
  )
}

export default TextInputComp

const styles = StyleSheet.create({
    padding: moderateScale(12),
    borderBottomColor: colors.grey,
    fontFamily: fontFamily.regular,
    fontSize: textScale(16),
    height: moderateScale(42)
})