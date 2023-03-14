import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import colors from '../styles/colors'

const WrapperContainer = ({
    statusBarColor = colors.white,
    barStyle='dark-content',
    containerStyle ={},
    children
}) => {
  return (
    <View style={{...styles.container, ...containerStyle}}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <SafeAreaView  style={{flex:1}}>
        {children}
      </SafeAreaView>
    </View>
  )
}

export default WrapperContainer

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white,
        paddingHorizontal: 16,
    }
})