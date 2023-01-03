import React from 'react'
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
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

  const onSelectedProfile = () => {
    // dispatch(selectFamily(item.id))
    navigation.navigate('Profile', {
      title: "Hola"
    })
  }

  const renderItem = ({ item }) => (
    <FamiliesItem item={item} onSelected={onSelected} />
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHead}>
        <Text style={styles.title}>List of Families</Text>
        <TouchableOpacity
            style={{ ...styles.contentContainer }}
            onPress={() => onSelectedProfile()}
          >
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }}
            style={{width: 50, height: 50, borderRadius: 50/ 2}}
          />
        </TouchableOpacity>
      </View>
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
