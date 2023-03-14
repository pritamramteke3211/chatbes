import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors'

const HorizontalLine = ({
    lineStyle={}
}) => {
  return (
    <View style={{...styles.lineStyle, ...lineStyle}} />
  )
}

export default HorizontalLine

const styles = StyleSheet.create({
    lineStyle:{
        borderBottomWidth: 0.6,
        borderBottomColor: colors.grey,
        height: 1
    }
})