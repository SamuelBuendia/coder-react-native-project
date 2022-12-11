import React from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import { FamiliesItem } from '../../components'
import { FAMILIES } from '../../constants/data'
import { styles } from './styles'

const Families = ({ navigation, route }) => {
  const families = FAMILIES
  const onSelected = (item) => {
    navigation.navigate('Family', {
      categoryId: item.id,
      title: item.title,
      color: item.color
    })
  }
  const renderItem = ({ item }) => (
    <FamiliesItem item={item} onSelected={onSelected} />
  )
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>List of Families</Text>
      <FlatList
        data={families}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.containerList}
      />
    </SafeAreaView>
  )
}

export default Families
