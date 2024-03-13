import { type AppVariant } from '@Types'
import { type ExpoConfig } from 'expo/config'

const config = require('./config.json')

const APP_VARIANT: AppVariant = (process.env.APP_VARIANT ?? 'development') as AppVariant

const expoConfig: ExpoConfig = {
  name: config[APP_VARIANT].EXPO_PUBLIC_APP_NAME,
  slug: 'mobile-web-fe-neeu',
  version: config[APP_VARIANT].EXPO_PUBLIC_APP_VERSION,
  scheme: `neeu-${APP_VARIANT}`,
  orientation: 'portrait',
  icon: `./assets/icon-${APP_VARIANT}.png`,
  userInterfaceStyle: 'light',
  splash: {
    image: `./assets/splash-${APP_VARIANT}.png`,
    resizeMode: 'cover'
  },
  assetBundlePatterns: [
    '**/*'
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: `com.mathius.kormasela.dev.neeu.${APP_VARIANT}`
  },
  android: {
    adaptiveIcon: {
      foregroundImage: `./assets/adaptive-icon-${APP_VARIANT}.png`,
      backgroundColor: '#ffffff'
    },
    package: `com.mathius.kormasela.dev.neeu.${APP_VARIANT}`
  },
  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro'
  },
  plugins: [
    'expo-router'
  ],
  extra: {
    router: {
      origin: false
    },
    eas: {
      projectId: 'e7e4468b-157e-405f-98dc-80333cb94797'
    }
  }
}

export default expoConfig
