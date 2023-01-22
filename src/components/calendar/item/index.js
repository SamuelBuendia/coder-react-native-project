import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { formatDate } from '../../../utils'
import { styles } from './styles'

const EventItem = ({ item, onHandleSelected }) => {
  const [date, setDate] = useState(Date)

  useEffect(() => {
    setDate(formatDate(parseFloat(item.date)))
  }, [item?.date])

  return (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => onHandleSelected(item)}
    >
      <View style={styles.listItem}>
        <Text style={styles.textId}>{date}</Text>
        <Text style={styles.textId}>
          {item.id} {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default EventItem
