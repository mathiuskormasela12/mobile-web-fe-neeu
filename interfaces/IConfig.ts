export interface IConfig {
  production: {
    EXPO_PUBLIC_APP_NAME: string
    EXPO_PUBLIC_APP_VERSION: string
    EXPO_PUBLIC_BUILD_NUMBER: string
    EXPO_PUBLIC_APP_URL: string
    EXPO_PUBLIC_API_URL: string
  }
  staging: {
    EXPO_PUBLIC_APP_NAME: string
    EXPO_PUBLIC_APP_VERSION: string
    EXPO_PUBLIC_BUILD_NUMBER: string
    EXPO_PUBLIC_APP_URL: string
    EXPO_PUBLIC_API_URL: string
  }
  development: {
    EXPO_PUBLIC_APP_NAME: string
    EXPO_PUBLIC_APP_VERSION: string
    EXPO_PUBLIC_BUILD_NUMBER: string
    EXPO_PUBLIC_APP_URL: string
    EXPO_PUBLIC_API_URL: string
  }
}
