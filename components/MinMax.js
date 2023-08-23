import React from "react"
import { Text, View } from "react-native"

export default function MinMax(props) {

    const {min, max} = props;
         console.warn(props);      


    return (
          
            <Text>O Maior é {max}</Text>        
    )

}