import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import WrapperContainer from '../../components/wrapperContainer'
import HeaderComponent from '../../components/headerComponent'
import HorizontalLine from '../../components/horizontalLine'
import imagePath from '../../constants/imagePath'
import strings from '../../constants/lang'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'
import styles from './styles'
import navigationStrings from '../../constants/navigationStrings'

const Chats = ({navigation}) => {

  const [data, setdata] = useState([])

  const leftCustomView = () => {
    return(
      <TouchableOpacity
      onPress={()=>navigation.goBack()}
      >
        {data.length > 0  ? <Text>Edit</Text> :  <View style={{height: 20}}/>}
        <Text style={styles.headingStyle}>{strings.CHATS}</Text>
      </TouchableOpacity>
    )
  }

  const onPressRight  = () =>  {
    navigation.navigate(navigationStrings.USERS)
  }

  const renderItem = useCallback(({item, index})=>{
    return(
      <Text>Flat item</Text>
      )
  },[data])

  const  listEmptyComponent= useCallback(()=>{
    return(
      <View style={styles.listEmptyStyle}>
        <View style={{}}>
        <Text style={styles.commStyle}>
          {strings.TAP_ON}{' '}
          <Image source={imagePath.icEdit}/>{' '}
          <Text style={styles.commStyle}>{strings.IN_THE_TOP_RIGHT_}</Text>
          </Text>
        
        </View>
        <Text style={{...styles.commStyle, color: colors.grey, marginTop:moderateScaleVertical(16)}}>{strings.YOU_CAN_CHAT_WITH_CONTACTS}</Text>
      </View>
      )
  })

  return (
    <WrapperContainer containerStyle={{paddingHorizontal: 0}}>
       <HeaderComponent
      centerText={``}
      containerStyle={{paddingHorizontal: 8}}
      leftCustomView={leftCustomView}
      isLeftView={true}
      rightImg={imagePath.icEdit}
      onPressRight={onPressRight}
      rightPressActive={false}
      />
      <FlatList 
      data={data}
      renderItem={renderItem}
      ListEmptyComponent={listEmptyComponent}
      contentContainerStyle={{flexGrow:1}}
      />
      {/* <HorizontalLine/> */}
    </WrapperContainer>
  )
}

export default Chats

