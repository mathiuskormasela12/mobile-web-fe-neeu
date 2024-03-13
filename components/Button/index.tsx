import React from 'react'
import { type IButton } from '@Interfaces'
import { Pressable, View, Text } from 'react-native'

const Button: React.FC<IButton> = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress} className='py-4 px-8 bg-sky-500 rounded hover:opacity-5'>
      <View>
        <Text className='text-white text-lg font-bold'>
          {children}
        </Text>
      </View>
    </Pressable>
  )
}

export default Button
