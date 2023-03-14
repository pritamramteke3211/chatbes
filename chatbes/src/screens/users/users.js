import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState,useEffect } from 'react'
import WrapperContainer from '../../components/wrapperContainer'
import HeaderComponent from '../../components/headerComponent'
import RoundImage from '../../components/RoundImage'
import HorizontalLine from '../../components/horizontalLine'
import imagePath from '../../constants/imagePath'
import strings from '../../constants/lang'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'
import styles from './styles'
import actions from '../../redux/actions'
import navigationStrings from '../../constants/navigationStrings'

const User = ({navigation}) => {

  const [data, setdata] = useState([])

  useEffect(() =>{
    fetchData()
  },[])

  const fetchData = async() => {
    try{
        const res = await actions.fetchUsers()
        // console.log("res fetch users", res)
        if (!!res?.data) {
          setdata(res.data.users)
        }
    }
    catch(error){
      console.log("error raised during fetch user", error)
    }
  }


  const onPressRight  = () =>  {
    navigation.goBack()
  }

  const onPressItem = useCallback((item)=>{
    navigation.navigate(navigationStrings.MESSAGE , {data: item})
  })

  const renderItem = useCallback(({item, index})=>{
    

    return(
        <TouchableOpacity onPress={()=> onPressItem(item)} activeOpacity={0.7} style={styles.headerStyle}>
        <RoundImage image={item?.profileImage} size={40}  />
        <Text style={styles.userName}>{item.name}</Text>
        </TouchableOpacity>
      )
  },[data])

  const  listEmptyComponent= useCallback(()=>{
    return(
      <View style={styles.listEmptyStyle}>
          <Text>No User Found</Text>
      </View>
      )
  })

  const listHeaderComponent = useCallback(() => {
    return(
      <View style={styles.headerStyle}>
        <RoundImage image={imagePath.icGroup} size={40} isStatic={true} />
        <Text style={styles.newGroupText}>{strings.NEW_GROUP}</Text>
      </View>
    )
  },[])

  return (
        <WrapperContainer containerStyle={{paddingHorizontal: 0}}>
       <HeaderComponent
      centerText={strings.NEW_CHAT}
      containerStyle={{paddingHorizontal: 8}}
      rightText={strings.CANCEL}
      rightTextStyle={{color: colors.lightBlue}}
      onPressRight={onPressRight}
      rightPressActive={false}
      />
      <FlatList 
      data={data}
      renderItem={renderItem}
      ListEmptyComponent={listEmptyComponent}
      contentContainerStyle={{flexGrow:1}}
      ListHeaderComponent={listHeaderComponent}
      ItemSeparatorComponent={()=> <HorizontalLine/>}
      />
      {/* <HorizontalLine/> */}
    </WrapperContainer>
  )
}

export default User