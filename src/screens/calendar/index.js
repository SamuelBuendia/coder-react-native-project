import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { styles } from './styles'

const Calendar = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Calendar</Text>
    </SafeAreaView>
  )
}

export default Calendar
