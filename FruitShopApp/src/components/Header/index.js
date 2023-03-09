import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

export default function Header({ leftIcon, leftOnPress, rightItem, style }) {
    return (
        <View style={[styles.container,style]}>
            <TouchableOpacity onPress={leftOnPress ? leftOnPress : null}>
                {leftIcon ? leftIcon : Icons.Icons({ name: "menu", height: 17.75, width: 23.5 })}
            </TouchableOpacity>
            {rightItem ?
                rightItem :
                <View style={styles.header_right}>
                    <TouchableOpacity style={styles.cart}>
                        {Icons.Icons({ name: "cart", height: 24.9, width: 22.41 })}
                        <View style={styles.dot} />
                    </TouchableOpacity>
                    <Image source={Images.avatar} style={styles.avatar} />
                </View>}
        </View>
    )
}