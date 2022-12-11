import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { FAMILY } from '../../constants/data/index'
import { FamilyItem } from '../../components'
import { styles } from './styles'

const Family = ({ navigation, route }) => {
  const { categoryId, color } = route.params
  const filteredProducts = FAMILY.filter(
    (product) => product.categoryId === categoryId
  )
  const onSelected = (item) => {
    navigation.navigate('Person', { title: item.title, productId: item.id })
  }
  const renderItem = ({ item }) => (
    <FamilyItem item={item} onSelected={onSelected} color={color} />
  )
  return (
    <FlatList
      data={filteredProducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
    />
  )
}

export default Family
