import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { COLORS } from '../constants/themes/colors'
import CalendarNavigator from './calendar'
import FamiliesNavigator from './families'
import SoundsNavigator from './sounds'

const BottomTab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="FamiliesTab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { paddingBottom: 10, height: 65 },
        tabBarLabelStyle: {
          fontFamily: 'Lato-Regular',
          fontSize: 12,
          paddingBottom: 0,
          paddingTop: 0
        },
        tabBarIconStyle: {
          paddingBottom: 0,
          paddingTop: 0
        },
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.gray
      }}
    >
      <BottomTab.Screen
        name="FamiliesTab"
        component={FamiliesNavigator}
        options={{
          title: 'Families',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'people' : 'people-outline'}
              size={22}
              color={COLORS.primaryDark}
            />
          )
        }}
      />
      <BottomTab.Screen
        name="CalendarTab"
        component={CalendarNavigator}
        options={{
          title: 'Events',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'calendar' : 'calendar-outline'}
              size={22}
              color={COLORS.primaryDark}
            />
          )
        }}
      />
      <BottomTab.Screen
        name="SoundsTab"
        component={SoundsNavigator}
        options={{
          title: 'Sounds',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'musical-note' : 'musical-note-outline'}
              size={22}
              color={COLORS.primaryDark}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}

export default Tabs
