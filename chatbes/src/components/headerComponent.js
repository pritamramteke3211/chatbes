import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import strings from '../constants/lang'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'

const HeaderComponent =({
    centerText = "",
    rightText = strings.DONE,
    leftCustomView = () => {},
    isLeftView = false,
    containerStyle = {},
    rightTextStyle={},
    onPressRight=()=>{},
    isRight = true,
    rightPressActive = true,
    rightImg = ''
}) =>
{  
return (
    <View
      style={{
        ...styles.container,
        ...containerStyle,
      }}
      >
        { isLeftView ? leftCustomView() : <View/> }
        <Text style={styles.centerTextStyle}>{centerText}</Text>
        {isRight ? <TouchableOpacity disabled={rightPressActive} onPress={onPressRight}>
          {rightImg  ?
          <Image source={rightImg}/>
          :
            <Text style={{...styles.rightTextStyle, ...rightTextStyle}}>{rightText}</Text>}
        </TouchableOpacity> : <View/>}
      </View>
)
  
    }

export default HeaderComponent

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.6,
        borderColor: 'grey',
        paddingBottom: 12,
        paddingHorizontal: 12
    },
    centerTextStyle:{
        color: colors.black,
        fontFamily: fontFamily.bold,
        fontSize: 24
    },
    rightText:{
        color: colors.green,
        fontFamily: fontFamily.bold,
        fontSize: 18
    }
})