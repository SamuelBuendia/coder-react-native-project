import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { FAMILY } from '../../constants/data'
import { styles } from './styles'

const Person = ({ navigation }) => {
  const product = useSelector((state) => state.family.selected)
  const { title, price, description, weight } = product || {}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.weight}>{weight}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  )
}

export default Person
