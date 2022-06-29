import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';



const HeaderButtons = () => {
    return(
        <TouchableOpacity onPress={()=>conole.log('working')}>
            <AntDesign name="star" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default HeaderButtons;