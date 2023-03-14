import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Calls = () => {
  return (
    <View style={styles.container}>
      <Text>Calls</Text>
    </View>
  )
}

export default Calls

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
})