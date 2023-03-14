import { Text, View,Image,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import imagePath from '../../constants/imagePath'
import styles from './styles';
import colors from '../../styles/colors';
import WrapperContainer from '../../components/wrapperContainer';
import strings from '../../constants/lang';

const TermsCondition = ({navigation}) => {
  return (
      <WrapperContainer
      containerStyle={{alignItems: 'center'}}
      >
        <Image
        resizeMode='contain'
        style={styles.logoStyle}
        source={imagePath.icLogo} />
        <Text style={styles.headingStyle}>{strings.WELCOME_TO_CHANGE}</Text>
        <Text style={styles.descStyle}>{strings.READ_OUR}<Text style={{color: colors.lightBlue}}>{strings.PRIVACY_POLICY}</Text> 
        {strings.TAP_AGREE_AND_CONTINUE_TO_ACCEPT_THE}
        <Text style={{color: colors.lightBlue}}> {strings.TERMS_OF_SERVICE} </Text>
        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate(navigationStrings.PHONE_NUMBER)} activeOpacity={0.7}>
          <Text style={styles.agreeStyle}>{strings.AGREE_AND_CONTINUE}</Text>
        </TouchableOpacity>
      </WrapperContainer>
  )
}

export default TermsCondition

