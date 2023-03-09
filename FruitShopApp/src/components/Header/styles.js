import {StyleSheet} from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    header_right:{
        flexDirection:'row',
        alignItems:'center'
    },
    avatar:{
        height:36,
        width:36,
        marginLeft:30
    },
    dot:{
        height:8.72,
        width:8.72,
        backgroundColor: Colors.orange,
        borderRadius:5,
        position:"absolute",
        bottom:-1,
        right:-1
    }
})