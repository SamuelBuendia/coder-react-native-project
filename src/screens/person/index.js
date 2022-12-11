import React from 'react'
import { View, Text } from 'react-native'

import { FAMILY } from '../../constants/data'
import { styles } from './styles'

const Person = ({ navigation, route }) => {
  const { productId } = route.params

  const filteredProduct = FAMILY.find((product) => product.id === productId)
  const { title, price, description, weight } = filteredProduct || {}
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
