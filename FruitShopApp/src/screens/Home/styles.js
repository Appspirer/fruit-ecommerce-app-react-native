import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gray_bg,
        paddingTop: 60,
        paddingHorizontal: 16
    },
    hot_item: {
        backgroundColor: Colors.gray_80,
        marginTop: 30,
        borderRadius: 28,
        height: width * 0.7 * 261 / 310,
    },
    hot_img: {
        width: width * 0.7,
        height: width * 0.7 * 261 / 310,
        position: 'absolute',
        top: -15,
        right: -23
    },
    hot_content: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        marginLeft: 20,
        marginRight: 7,
        marginTop: 36,
        marginBottom: 30
    },
    offer: {
        fontSize: 12,
        fontWeight: '800',
        color: Colors.brown,
        letterSpacing: 10
    },
    discount: {
        fontSize: 28,
        color: Colors.white,
        fontWeight: '700',
        marginVertical: 10
    },
    content: {
        fontSize: 12,
        fontWeight: '800',
        color: Colors.gray_40,
        width: '60%'
    },
    button: {
        paddingHorizontal: 22,
        paddingVertical: 9,
        backgroundColor: Colors.yellow,
        borderRadius: 10,
        marginTop: 14,
        marginBottom: -15,
        marginLeft: 2
    },
    text: {
        fontSize: 12,
        fontWeight: '800',
    },
    recommend_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 30
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    recommend: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.gray_40
    },
    view_all: {
        fontSize: 12,
        fontWeight: '800',
        color: Colors.yellow,
        marginRight: 10
    },
    item_content: {
        width: (width - 73) / 2,
        height:200,
        alignItems: 'center',
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20
    },
    item:{
        paddingTop:60,
        marginRight:40
    },
    item_img:{
        position:'absolute',
        bottom:0
    },
    img_container:{
        height:100,
        width:(width - 73) / 2,
        alignItems:'center'
    },
    bottom_item:{
        backgroundColor: Colors.black,
        width:(width - 73) / 2,
        paddingLeft:16,
        paddingRight:8,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20
    },
    rating_text:{
        color: Colors.white,
        fontSize:12,
        fontWeight:'800',
        marginLeft:5
    },
    rating:{
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:10
    },
    fruit:{
        fontSize:12,
        fontWeight:'800',
        color: Colors.yellow,
        textTransform:'uppercase',
        letterSpacing: 5,
        marginTop:-10
    },
    name:{
        fontSize:20,
        fontWeight:'700',
        color: Colors.white,
        marginVertical:7
    },
    price_container:{
        flexDirection:'row',
        marginBottom:20
    },
    price:{
        fontSize:16,
        fontWeight:'800',
        color: Colors.brown3
    },
    unit:{
        fontSize:12,
        fontWeight:'800',
        color: Colors.gray_40_2,
        marginTop:8,
        marginLeft:5
    }
})