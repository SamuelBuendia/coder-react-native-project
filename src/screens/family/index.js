import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { FamilyItem } from '../../components'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { filterPerson, selectPerson } from '../../store/actions'

const Family = ({ navigation }) => {
  const dispatch = useDispatch()
  const family = useSelector((state) => state.families.selected)
  const filteredProducts = useSelector((state) => state.family.filteredFamilies)

  useEffect(() => {
    dispatch(filterPerson(family.id))
  }, [])

  const onSelected = (item) => {
    dispatch(selectPerson(item.id))
    navigation.navigate('Person', { title: item.title })
  }
  const renderItem = ({ item }) => (
    <FamilyItem item={item} onSelected={onSelected} color={family.color} />
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
