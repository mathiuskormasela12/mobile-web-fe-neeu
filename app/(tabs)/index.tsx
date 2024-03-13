import { Button } from '@Components'
import { useAtom } from 'jotai'
import React, { useCallback } from 'react'
import { View, Text } from 'react-native'
import { counterAtom } from '@Stores'

const PostPage: React.FC = () => {
  const [count, setCount] = useAtom(counterAtom)

  const handleIncrement = useCallback(() => {
    setCount((currentCount) => currentCount + 1)
  }, [setCount])

  return (
    <View className='h-screen justify-center items-center bg-white'>
      <Text className='text-center text-2xl text-slate-700'>Hello React Native</Text>
      <Button onPress={handleIncrement}>
        Counter {count}
      </Button>
    </View>
  )
}

export default PostPage
