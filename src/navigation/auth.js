import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { COLORS } from '../constants/themes/colors'
import { Auth } from '../screens'
import { isIOS } from '../utils'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
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
        name="Auth"
        component={Auth}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator
