import React from 'react'
import { FlatList, Text, View, ListItem } from 'react-native'
import { styles } from './styles'

const EventList = ({ eventList, renderItem }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={eventList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default EventList
