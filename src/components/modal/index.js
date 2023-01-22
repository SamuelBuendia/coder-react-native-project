import React from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { COLORS } from '../../constants/themes/colors'
import { styles } from './styles'

const EventModal = ({
  showModal,
  selectedEvent,
  onHandleComplete,
  onHandleCancel,
  onHandleDeleteItem
}) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Event Detail</Text>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailText}>
           Your Event Name
          </Text>
          <Text style={styles.selectedEvent}>{selectedEvent?.title}</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button title="Cancel" color={COLORS.red} onPress={onHandleCancel} />
          <Button title="Delete" color={COLORS.red} onPress={onHandleDeleteItem} />
        </View>
      </View>
    </Modal>
  )
}

export default EventModal
