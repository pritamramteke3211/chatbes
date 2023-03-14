import { StyleSheet } from "react-native";
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    flexView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal: moderateScale(16),
        paddingBottom: moderateScaleVertical(8),
        borderBottomWidth: 0.5,
        borderBottomColor: colors.grey
    },
    nameView:{
        flexDirection: 'row',
        alignItems:'center',
        marginLeft: moderateScale(8),
    },
    nameStyle: {
        fontFamily:  fontFamily.regular,
        fontSize: textScale(16),
        marginLeft: moderateScale(8),
        textTransform:'capitalize',
    }
})

export default styles