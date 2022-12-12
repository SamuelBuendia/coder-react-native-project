import React from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { FamiliesItem } from '../../components'
import { selectFamily } from '../../store/actions'
import { styles } from './styles'

const Families = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const families = useSelector((state) => state.families.families)
  const onSelected = (item) => {
    dispatch(selectFamily(item.id))
    navigation.navigate('Family', {
      title: item.title
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
