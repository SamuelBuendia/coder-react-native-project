import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { COLORS } from '../constants/themes/colors'
import { Calendar } from '../screens'
import { isIOS } from '../utils'

const Stack = createNativeStackNavigator()

const CalendarNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Calendar"
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
        name="Calendar"
        component={Calendar}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default CalendarNavigator
