import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, Text } from 'react-native'
import { styles } from './styles'

const Auth = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.KeyboardContainer}
      behavior="padding"
      enabled
    >
      <SafeAreaView style={styles.container}>
        <Text>Auth</Text>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Auth
