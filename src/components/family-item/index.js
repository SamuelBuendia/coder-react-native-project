import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

const FamilyItem = ({ item, onSelected, color }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <TouchableOpacity style={styles.item} onPress={() => onSelected(item)}>
        <Text style={styles.title}>Name: {item.name}</Text>
        <Text style={styles.title}>{item.description}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.price}>CC: {item.doc}</Text>
          <Text style={styles.weight}>Phone: {item.tel}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default FamilyItem
