import React from 'react'
import { Stack } from 'expo-router'
import { Provider } from 'jotai'
import { store } from '@Stores'

import '../styles/tailwind.css'

const Layout: React.FC = () => {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='(tabs)' />
      </Stack>
    </Provider>
  )
}

export default Layout
