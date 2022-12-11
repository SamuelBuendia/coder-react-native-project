import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { COLORS } from '../constants/themes/colors'
import { Sounds } from '../screens'
import { isIOS } from '../utils'

const Stack = createNativeStackNavigator()

const SoundsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Sounds"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS
            ? COLORS.backgroundDark
            : COLORS.backgroundLight
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontFamily: 'Lato-Bold'
        },
        presentation: 'card',
        headerBackTitle: ''
      }}
    >
      <Stack.Screen
        name="Sounds"
        component={Sounds}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default SoundsNavigator
