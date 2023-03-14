import { View, Text, Image, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native'
import React,{useCallback, useEffect,useState} from 'react'
import WrapperContainer from '../../components/wrapperContainer'
import imagePath from '../../constants/imagePath'
import RoundImage from '../../components/RoundImage'
import styles from './styles'
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'
import { GiftedChat,InputToolbar } from 'react-native-gifted-chat'
import colors from '../../styles/colors'

const Message = ({route, navigation}) => {
    console.log("route", route)
    const {data} = route.params;
    const [messages, setmessages] = useState([])

    useEffect(() => {
        setmessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ])
      }, [])

    const onSend = useCallback((messages = []) => {
        setmessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    const renderActions = useCallback(() => {
        return(
            <TouchableOpacity
             style={{
                marginLeft: moderateScale(8),
                marginBottom: moderateScaleVertical(10)}}
             >
                <Image source={imagePath.icPlus} />
            </TouchableOpacity>    
        )
    },[])

    return (
    <View style={{flex:1}} >
        <View style={styles.flexView}>
            <SafeAreaView>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.goBack()} >
                <Image source={imagePath.icBack}/>
            </TouchableOpacity>
            
            <View style={styles.nameView}>
                <RoundImage
                size={40}
                image={data?.profileImage}
                />
                <Text style={styles.nameStyle}>{data?.name}</Text>
            </View>
            </View>
            </SafeAreaView>

            <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity>
                    <Image source={imagePath.icVideo}/>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{marginLeft: moderateScale(12)}}
                >
                    <Image source={imagePath.icCalls}/>
                </TouchableOpacity>
            </View>
        </View>
        
        <ImageBackground source={imagePath.icBigLight} style={{flex: 1}}>
        <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      textInputStyle={{
        backgroundColor: colors.white,
        borderRadius: moderateScale(20),
        paddingHorizontal: moderateScale(12),
        marginTop: moderateScaleVertical(6),
        borderWidth: 0.5,
        borderColor: colors.grey,
        paddingTop: moderateScaleVertical(8),
      }}
      renderInputToolbar={props => {
        return(
            <InputToolbar
            containerStyle = {{
                backgroundColor:'#f6f6f6', 
            }}
            {...props}
            />
        )
      }}
      renderActions={renderActions}
    />
    </ImageBackground>
    </View>
  )
}

export default Message