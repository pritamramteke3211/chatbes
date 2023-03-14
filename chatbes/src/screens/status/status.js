import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Status = () => {
  return (
    <View style={styles.container}>
      <Text>Status</Text>
    </View>
  )
}

export default Status

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
})