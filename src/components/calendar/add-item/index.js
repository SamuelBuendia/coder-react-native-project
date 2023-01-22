import React, { useEffect, useState } from 'react'
import { Button, Modal, Text, TextInput, View } from 'react-native'
import { COLORS } from '../../../constants/themes/colors'
import { styles } from './styles'

const AddItem = ({ show, setShow, event, addItem, changeText }) => {
  const [date, setDate] = useState(Date)

  useEffect(() => {
    setDate(new Date(event.date.timestamp).toDateString())
  }, [event.date.timestamp])

  return (
    <Modal visible={show} animationType="slide">
      <View style={styles.inputContainer}>
        <Text>{date}</Text>
        <TextInput
          style={styles.input}
          value={event.event}
          placeholder="Enter Task"
          onChangeText={changeText}
        />
        <View style={styles.containerButtons}>
          <Button
            title="Cancel"
            color={COLORS.red}
            onPress={() => setShow(false)}
          />
          <Button
            disabled={!event.event}
            title="Add"
            color={COLORS.success}
            onPress={addItem}
          />
        </View>
      </View>
    </Modal>
  )
}

export default AddItem
