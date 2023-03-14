import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import Routes from './src/navigations/Routes'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import  { clearAllItem, getItem } from './src/utils/utils'
import { saveUserData } from './src/redux/reducers/auth'


const App = () => {

  useEffect(() => {
    (async()=>{
      let userData = await getItem('userData')
      if (!!userData) {
        store.dispatch(saveUserData(userData))
      }
    
    })();  
  }, [])
  
  

  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Routes/>
    </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
})