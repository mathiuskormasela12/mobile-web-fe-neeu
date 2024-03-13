import React from 'react'
import { View, Text } from 'react-native'

const AddPostPage: React.FC = () => {
  return (
    <View>
      <Text>Hello React Native (Add Post)</Text>
      <Text>App Name : {process.env.EXPO_PUBLIC_APP_NAME}</Text>
      <Text>App Version : {process.env.EXPO_PUBLIC_APP_VERSION}</Text>
      <Text>Build Number : {process.env.EXPO_PUBLIC_BUILD_NUMBER}</Text>
      <Text>App Url : {process.env.EXPO_PUBLIC_APP_URL}</Text>
      <Text>Api Url : {process.env.EXPO_PUBLIC_API_URL}</Text>
    </View>
  )
}

export default AddPostPage
