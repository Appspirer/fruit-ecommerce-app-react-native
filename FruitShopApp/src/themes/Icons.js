import React from "react";
import heart_focus from '../assets/svgs/heart_focus.svg'
import heart from '../assets/svgs/heart.svg'
import home_focus from '../assets/svgs/home_focus.svg'
import home from '../assets/svgs/home.svg'
import list_focus from '../assets/svgs/list_focus.svg'
import list from '../assets/svgs/list.svg'
import search_focus from '../assets/svgs/search_focus.svg'
import search from '../assets/svgs/search.svg'
import menu from '../assets/svgs/menu.svg'
import cart from '../assets/svgs/cart.svg'
import arrow_next from '../assets/svgs/arrow_next.svg'
import star from '../assets/svgs/star.svg'
import back from '../assets/svgs/back.svg'
import cart_white from '../assets/svgs/cart_white.svg'
import heart_button from '../assets/svgs/heart_button.svg'
import ic_restaurent from '../assets/svgs/ic_restaurent.svg'
import carbon_delivery from '../assets/svgs/carbon_delivery.svg'
import bx_like from '../assets/svgs/bx_like.svg'
import arrow_next_black from '../assets/svgs/arrow_next_black.svg'
import subtract from '../assets/svgs/subtract.svg'
import plus from '../assets/svgs/plus.svg'

const SVGs = {
    heart,
    heart_focus,
    home,
    home_focus,
    list,
    list_focus,
    search_focus,
    search,
    menu,
    cart,
    arrow_next,
    back,
    star,
    cart_white,
    heart_button,
    ic_restaurent,
    carbon_delivery,
    bx_like,
    arrow_next_black,
    subtract,
    plus
}

export default {
    Icons: ({ name = "", height, width }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons name={name} height={height} width={width} />
        }else {
            return null
        }
    }
}