import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { FAMILY } from '../../constants/data'
import { styles } from './styles'

const Person = ({ navigation }) => {
  const product = useSelector((state) => state.family.selected)
  const { name, description, doc, tel } = product || {}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.weight}>Document: {doc}</Text>
      <Text style={styles.phone}>Phone:{tel}</Text>
    </View>
  )
}

export default Person
