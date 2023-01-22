import React, { useEffect, useState } from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'
import { styles } from './styles'
import { Audio } from 'expo-av'

const Sounds = ({ navigation, route }) => {
  const [sound, setSound] = useState()

  const soundsList = [
    {
      title: 'Hijo Favorito',
      key: 'hijofavorito'
    },
    {
      title: 'Por Favor',
      key: 'porfavor'
    },
    {
      title: 'La Historia',
      key: 'lahistoria'
    },
    {
      title: 'Me Dieron Salida',
      key: 'medieronsalida'
    },
    {
      title: 'Animo Papito',
      key: 'animopapito'
    }
  ]

  const importSound = (whichSound) => {
    switch (whichSound) {
      case 'porfavor':
        return require('../../../assets/records/porfavor.mp3')
      case 'hijofavorito':
        return require('../../../assets/records/favorito.mp3')
      case 'hijofavorito':
        return require('../../../assets/records/favorito.mp3')
      case 'lahistoria':
        return require('../../../assets/records/lahistoria.mp3')
      case 'medieronsalida':
        return require('../../../assets/records/medieronsalida.mp3')
      case 'animopapito':
        return require('../../../assets/records/animopapito.mp3')
    }
  }

  const playSound = async (whichSound) => {
    const { sound } = await Audio.Sound.createAsync(importSound(whichSound))
    setSound(sound)
    await sound.playAsync()
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return (
    <View style={styles.container}>
      {soundsList.map((element, idx) => (
        <View key={idx} style={styles.buttonContainer}>
          <Button style={styles.button} title={element.title} onPress={() => playSound(element.key)} />
        </View>
      ))}
    </View>
  )
}

export default Sounds
