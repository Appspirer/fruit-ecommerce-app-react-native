import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: Colors.gray_80
    },
    right_item: {
        backgroundColor: Colors.gray_60,
        height: 57,
        width: 58,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        height: 8.49,
        width: 8.49,
        borderRadius: 5,
        backgroundColor: Colors.orange,
        position: 'absolute',
        bottom: -1,
        right: -1
    },
    header: {
        marginHorizontal: 16
    },
    fruit: {
        fontSize: 16,
        fontWeight: '800',
        color: Colors.brown3,
        textTransform: 'uppercase',
        letterSpacing: 10,
        marginTop: height * 0.05,
        textAlign: 'center'
    },
    name: {
        fontSize: 40,
        fontWeight: '700',
        color: Colors.white,
        textAlign: 'center',
        marginTop: 10
    },
    img: {
        height: height * 0.4,
        width: height * 0.3 * 256 / 320,
        alignSelf: 'center',
        zIndex: 1
    },
    content: {
        flex: 1,
        backgroundColor: Colors.gray_100,
        marginTop: -height * 0.18,
        borderTopLeftRadius: 500,
        borderTopRightRadius: 500,
        transform: [{ scaleX: 1.2 }],
        paddingBottom:100
    },
    scale: {
        marginHorizontal: (width * 0.1 + 10),
        marginTop: height * 0.15
    },
    price:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    rating:{
        flexDirection:'row',
        marginTop:5
    },
    left_price_container:{
        flexDirection:'row',
        alignItems:'center'
    },
    favorite:{
        backgroundColor: Colors.gray_80,
        height:72,
        width:72,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    price_text:{
        fontSize:36,
        fontWeight:'500',
        color: Colors.brown3,
        letterSpacing:-2
    },
    unit:{
        fontSize:16,
        fontWeight:'600',
        color: Colors.gray_40_2,
        letterSpacing:-1
    },
    rate_text:{
        fontSize:12,
        fontWeight:'800',
        color: Colors.white, 
        marginLeft:5
    },
    action_container:{
        flexDirection:'row',
        marginHorizontal:16,
        justifyContent:'space-between',
        marginTop:40
    },
    action:{
        height:72,
        width:72,
        borderRadius:36,
        backgroundColor: Colors.gray_80,
        justifyContent:'center',
        alignItems:'center'
    },
    action_text:{
        fontSize:12,
        fontWeight:'800',
        color: Colors.white,
        width:72,
        textAlign:'center',
        marginTop:4
    },
    go_to_cart:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: Colors.yellow,
        paddingHorizontal:16,
        paddingVertical:14,
        borderRadius:12
    },
    bottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30
    },
    quality:{
        backgroundColor: Colors.gray_80,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:16,
        paddingVertical:14,
        borderRadius:12
    },
    quality_text:{
        marginHorizontal:20,
        fontSize:18,
        fontWeight:'bold',
        color: Colors.white
    },
    quality_button:{
        height:20,
        width:20,
        justifyContent:'center',
        alignItems:'center'
    },
    cart_text:{
        fontSize:16,
        fontWeight:'800', 
        marginRight:5
    }
})