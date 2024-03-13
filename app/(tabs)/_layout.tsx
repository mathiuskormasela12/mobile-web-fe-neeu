import { Tabs } from 'expo-router'
import React from 'react'

const Layout: React.FC = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Post'
        }}
      />
      <Tabs.Screen
        name='searchAccount'
        options={{
          title: 'Search'
        }}
      />
      <Tabs.Screen
        name='addPost'
        options={{
          title: 'Add Post'
        }}
      />
      <Tabs.Screen
        name='user'
        options={{
          title: 'User'
        }}
      />
    </Tabs>
  )
}

export default Layout
