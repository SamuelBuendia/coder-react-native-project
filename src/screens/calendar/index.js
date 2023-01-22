import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { styles } from './styles'

import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { AddItem, EventItem, EventList, EventModal } from '../../components'
import { createEvent, deleteEvent, getEvents } from '../../db'

const CalendarSreen = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisibleCreate, setModalVisibleCreate] = useState(false)
  const [event, setEvent] = useState('')
  const [date, setDate] = useState('')
  const [eventList, setEventList] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)

  const renderItem = ({ item }) => (
    <EventItem item={item} onHandleSelected={onHandleSelected} />
  )

  useEffect(() => {
    onHandlerGetEvents()
  }, []);

  const onHandleSelected = (item) => {
    setSelectedEvent(item)
    setModalVisible(true)
  }

  const onHandleChange = (text) => setEvent(text)

  const showNewEvent = (date) => {
    setDate(date)
    setModalVisibleCreate(true)
  }

  const onHandlerGetEvents = async () => {
    const { rows } = await getEvents()
    setEventList(rows._array)
  }

  const onHandleCancel = () => {
    setModalVisible(false)
  }

  const addItem = async () => {
    try {
      await createEvent(event, date.timestamp)
      onHandlerGetEvents()
      setEvent('')
      setModalVisibleCreate(false)
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleDeleteItem = async () => {
    try {
      await deleteEvent(selectedEvent.id)
      onHandlerGetEvents()
      setModalVisible(false)
    } catch (error) {
      console.log(error)
    }
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Add New Event</Text>
        <Calendar
          style={styles.calendar}
          onDayPress={(date) => {
            showNewEvent(date)
          }}
        />
        <EventList eventList={eventList} renderItem={renderItem} />
        <AddItem
          show={modalVisibleCreate}
          setShow={setModalVisibleCreate}
          event={{ event, date }}
          addItem={addItem}
          changeText={onHandleChange}
        />
        <EventModal
          showModal={modalVisible}
          selectedEvent={selectedEvent}
          onHandleCancel={onHandleCancel}
          onHandleDeleteItem={onHandleDeleteItem}
        />
      </View>
    </SafeAreaView>
  )
}

export default CalendarSreen
