import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import Header from "../../components/Header";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

var { height, width } = Dimensions.get('window')

export default function Details({ navigation }) {

    const [quality, setQuality] = useState(1)

    const rightItem = () => {
        return (
            <TouchableOpacity style={styles.right_item}>
                <View style={styles.cart_container}>
                    {Icons.Icons({ name: 'cart_white', height: 24.26, width: 21.83 })}
                    <View style={styles.dot} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Header
                style={styles.header}
                leftIcon={Icons.Icons({ name: "back", height: 24, width: 31.77 })}
                leftOnPress={() => navigation.goBack()}
                rightItem={rightItem()}
            />
            <ScrollView>
                <Text style={styles.fruit}>Fruit</Text>
                <Text style={styles.name}>Pinneaple</Text>
                <Image source={Images.pinneaple_details} style={styles.img} />
                <View style={styles.content}>
                    <View style={styles.scale}>
                        <View style={styles.price}>
                            <View style={styles.left_price_container}>
                                <View style={styles.left_price}>
                                    <Text style={styles.price_text}>Rp 80.000</Text>
                                    <View style={styles.rating}>
                                        {[...Array(5).keys()].map((item, index) => {
                                            return (
                                                <View style={styles.star}>
                                                    {Icons.Icons({ name: "star", height: 16, width: 16 })}
                                                </View>
                                            )
                                        })}
                                        <Text style={styles.rate_text}>5.0</Text>
                                    </View>
                                </View>
                                <Text style={styles.unit}>per kg</Text>
                            </View>
                            <TouchableOpacity style={styles.favorite}>
                                {Icons.Icons({ name: "heart_button", height: 40, width: 40 })}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.action_container}>
                            <View>
                                <TouchableOpacity style={styles.action}>
                                    {Icons.Icons({ name: "bx_like", height: 36, width: 36 })}
                                </TouchableOpacity>
                                <Text style={styles.action_text}>Quality Assurance</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.action}>
                                    {Icons.Icons({ name: "carbon_delivery", height: 36, width: 36 })}
                                </TouchableOpacity>
                                <Text style={styles.action_text}>Fast Delivery</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.action}>
                                    {Icons.Icons({ name: "ic_restaurent", height: 36, width: 36 })}
                                </TouchableOpacity>
                                <Text style={styles.action_text}>Best-in Taste</Text>
                            </View>
                        </View>
                        <View style={styles.bottom}>
                            <View style={styles.quality}>
                                <TouchableOpacity style={styles.quality_button} onPress={() => setQuality(quality - 1)}>
                                    {Icons.Icons({ name: "subtract", height: 5, width: 12 })}
                                </TouchableOpacity>
                                <Text style={styles.quality_text}>{quality}</Text>
                                <TouchableOpacity style={styles.quality_button} onPress={() => setQuality(quality + 1)}>
                                    {Icons.Icons({ name: "plus", height: 12, width: 12 })}
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.go_to_cart}>
                                <Text style={styles.cart_text}>Go to Cart</Text>
                                {Icons.Icons({ name: 'arrow_next_black', height: 20, width: 20 })}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}