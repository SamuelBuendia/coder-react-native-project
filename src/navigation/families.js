import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { COLORS } from '../constants/themes/colors'
import { Families, Person, Family } from '../screens'
import { isIOS } from '../utils'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Families"
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
        name="Families"
        component={Families}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Family"
        component={Family}
        options={({ route }) => ({
          title: route.params.title
        })}
      />
      <Stack.Screen
        name="Person"
        component={Person}
        options={({ route }) => ({
          title: route.params.title
        })}
      />
    </Stack.Navigator>
  )
}

export default ShopNavigator
