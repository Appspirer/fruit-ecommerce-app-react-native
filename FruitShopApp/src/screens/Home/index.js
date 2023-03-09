import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import Header from "../../components/Header";
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        img: Images.pinneaple,
        rate: 5.0,
        name: 'Pinneaple',
        price: 80.000,
        bg: "#43311B"
    },
    {
        id: 1,
        img: Images.apple,
        rate: 4.7,
        name: 'Apple',
        price: 25.000,
        bg: "#43251B"
    },
]

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.hot_item}>
                    <Image source={Images.img1} style={styles.hot_img} />
                    <View style={styles.hot_content}>
                        <Text style={styles.offer}>OFFER</Text>
                        <Text style={styles.discount}>Discount up to 40% Off</Text>
                        <Text style={styles.content}>In honor of World Health Day We’d like to give you this amazing offers.</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.text}>View Offers</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.recommend_container}>
                    <Text style={styles.recommend}>Recommended Fruits</Text>
                    <TouchableOpacity style={styles.view}>
                        <Text style={styles.view_all}>View All</Text>
                        {Icons.Icons({ name: "arrow_next", height: 14, width: 10 })}
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {data.map((item, index) => {
                        return (
                            <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('Details')}>
                                <View style={[styles.item_content, { backgroundColor: item.bg }]}>
                                    <View style={styles.img_container}>
                                        <Image source={item.img} style={styles.item_img} />
                                    </View>
                                    <View style={styles.bottom_item}>
                                        <View style={styles.rating}>
                                            {Icons.Icons({ name: "star", height: 16, width: 16 })}
                                            <Text style={styles.rating_text}>{item.rate.toFixed(1)}</Text>
                                        </View>
                                        <Text style={styles.fruit}>fruit</Text>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <View style={styles.price_container}>
                                            <Text style={styles.price}>Rp. {item.price.toFixed(3)}</Text>
                                            <Text style={styles.unit}>per kg</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </ScrollView>
        </View>
    )
}