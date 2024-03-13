import path from 'path'
import { type AppVariant, type SetEas } from '@Types'

export const setEas: SetEas = async ({ writeFile, config }) => {
  const eas = {
    cli: {
      version: '>= 7.5.0'
    },
    build: {
      'development-debug': {
        developmentClient: true,
        distribution: 'internal',
        android: {
          buildType: 'apk'
        },
        ios: {
          simulator: true
        },
        env: {
          APP_VARIANT: 'development'
        }
      },
      'development-release': {
        distribution: 'internal',
        android: {
          buildType: 'apk'
        },
        ios: {
          simulator: true
        },
        env: {
          APP_VARIANT: 'development'
        }
      },
      'staging-debug': {
        developmentClient: true,
        distribution: 'internal',
        android: {
          buildType: 'apk'
        },
        ios: {
          simulator: true
        },
        env: {
          APP_VARIANT: 'staging'
        }
      },
      'staging-release': {
        distribution: 'internal',
        android: {
          buildType: 'apk'
        },
        ios: {
          simulator: true
        },
        env: {
          APP_VARIANT: 'staging'
        }
      },
      'production-debug': {
        developmentClient: true,
        distribution: 'internal',
        android: {
          buildType: 'apk'
        },
        ios: {
          simulator: true
        },
        env: {
          APP_VARIANT: 'production'
        }
      },
      'production-release': {
        distribution: 'internal',
        android: {
          buildType: 'apk'
        },
        ios: {
          simulator: true
        },
        env: {
          APP_VARIANT: 'production'
        }
      }
    },
    submit: {
      production: {}
    }
  }

  for (const prop in eas.build) {
    const key = prop as keyof typeof eas.build
    const env = key.split('-').shift() as AppVariant

    eas.build[key].env = {
      ...eas.build[key].env,
      ...config[env]
    }
  }

  const result = JSON.stringify(eas, null, 2)

  try {
    await writeFile(path.join(__dirname, '../../eas.json'), result)
    return result
  } catch (err) {
    const { message } = err as Error
    throw new Error(message)
  }
}
