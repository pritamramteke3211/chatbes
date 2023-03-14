import { StyleSheet, Text, View,TouchableOpacity,Image,  SafeAreaView,FlatList } from 'react-native'
import React,{Fragment, useCallback, useState} from 'react'
import colors from '../styles/colors'
import imagePath from '../constants/imagePath'
import Modal from "react-native-modal";
import HeaderComponent from './headerComponent';
import countries from './countries';
import HorizontalLine from './horizontalLine';
import fontFamily from '../styles/fontFamily';
import { textScale } from '../styles/responsiveSize';
import { SvgUri } from 'react-native-svg';

const CountryPicker = ({
  fetchCountry = () => {},
  value=""
}) => {

  const [data, setdata] = useState(countries)
  const [showModal, setshowModal] = useState(false)
 
  const renderItem = useCallback(({item,  index})=>{
    let isSelected = value == item.name
    return(
      <TouchableOpacity key={index} 
      style={{marginHorizontal: 16, flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}
      activeOpacity={0.7}
      onPress={()=>onSelectCountry(item)}
      >
        <SvgUri
    width="36"
    height="28"
    uri={item?.flag}
  />
        <Text style={{
          ...styles.nameStyle,
           color: value == item.name ? colors.lightBlue : colors.black,
           fontFamily: isSelected ? fontFamily.bold : fontFamily.regular
           }} >{item?.name} ({item?.dialCode})</Text>
      </TouchableOpacity>
    )
  },[data,value])

  
  const onSelectCountry = (item) => {
      fetchCountry(item)
      setshowModal(false)
  }

  return (
  <Fragment>
    <TouchableOpacity 
    activeOpacity={0.7}
      style={styles.container}
      onPress={()=> setshowModal(true)}
      >
        <Text style={styles.valueStyle}>{value}</Text>
        <Image source={imagePath.icForward} />
      </TouchableOpacity>
      <Modal
      style={{ backgroundColor: colors.white, margin: 0}}
      isVisible={showModal}>
        <SafeAreaView style={{flex: 1}}>
        <View style={{ flex: 1 }}>
          <HeaderComponent centerText='Select your Country'
          onPressRight={()=> setshowModal(false)}
          />
            <View>
              <FlatList
              data={data}
              renderItem={renderItem}
              ItemSeparatorComponent={()=><HorizontalLine 
                lineStyle={{marginVertical: 12}}
              
                />}
                ListHeaderComponent={()=> <View style={{height: 20}}/>}
              />
          </View>
    
        </View>
        </SafeAreaView>
      </Modal>
      </Fragment>
  )
}

export default CountryPicker

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        borderBottomWidth: 0.8,
        borderBottomColor: colors.grey,
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    valueStyle:{
      color: colors.lightBlue,
      fontFamily: fontFamily.bold,
      fontSize: textScale(18),
    },
    nameStyle: {
      fontFamily: fontFamily.regular,
      fontSize: textScale(18),
    }
})