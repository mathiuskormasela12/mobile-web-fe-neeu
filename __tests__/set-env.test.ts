import { setEnv } from '@Scripts'
import { type AppVariant } from '@Types'

describe('Set-Env', () => {
  const config = {
    production: {
      EXPO_PUBLIC_APP_NAME: 'NeeU',
      EXPO_PUBLIC_APP_VERSION: '1.0.0',
      EXPO_PUBLIC_BUILD_NUMBER: '1',
      EXPO_PUBLIC_APP_URL: 'https://neeu.mathiuskormasela.com',
      EXPO_PUBLIC_API_URL: 'https://neeu.mathiuskormasela.com/api/v1'
    },
    staging: {
      EXPO_PUBLIC_APP_NAME: 'NeeU (Stg)',
      EXPO_PUBLIC_APP_VERSION: '1.0.0',
      EXPO_PUBLIC_BUILD_NUMBER: '1',
      EXPO_PUBLIC_APP_URL: 'https://neeu-staging.mathiuskormasela.com',
      EXPO_PUBLIC_API_URL: 'https://neeu-staging.mathiuskormasela.com/api/v1'
    },
    development: {
      EXPO_PUBLIC_APP_NAME: 'NeeU (Dev)',
      EXPO_PUBLIC_APP_VERSION: '1.0.0',
      EXPO_PUBLIC_BUILD_NUMBER: '1',
      EXPO_PUBLIC_APP_URL: 'http://localhost:9000',
      EXPO_PUBLIC_API_URL: 'http://localhost:9000/api/v1'
    }
  }

  const successTestCases = [
    {
      selectedEnv: 'development' as AppVariant,
      expectedResult: "# DO NOT TOUCH\n# This file gets generated by 'env:*' scripts\n\nEXPO_PUBLIC_APP_NAME=NeeU (Dev)\nEXPO_PUBLIC_APP_VERSION=1.0.0\nEXPO_PUBLIC_BUILD_NUMBER=1\nEXPO_PUBLIC_APP_URL=http://localhost:9000\nEXPO_PUBLIC_API_URL=http://localhost:9000/api/v1\n"
    },
    {
      selectedEnv: 'staging' as AppVariant,
      expectedResult: "# DO NOT TOUCH\n# This file gets generated by 'env:*' scripts\n\nEXPO_PUBLIC_APP_NAME=NeeU (Stg)\nEXPO_PUBLIC_APP_VERSION=1.0.0\nEXPO_PUBLIC_BUILD_NUMBER=1\nEXPO_PUBLIC_APP_URL=https://neeu-staging.mathiuskormasela.com\nEXPO_PUBLIC_API_URL=https://neeu-staging.mathiuskormasela.com/api/v1\n"
    },
    {
      selectedEnv: 'production' as AppVariant,
      expectedResult: "# DO NOT TOUCH\n# This file gets generated by 'env:*' scripts\n\nEXPO_PUBLIC_APP_NAME=NeeU\nEXPO_PUBLIC_APP_VERSION=1.0.0\nEXPO_PUBLIC_BUILD_NUMBER=1\nEXPO_PUBLIC_APP_URL=https://neeu.mathiuskormasela.com\nEXPO_PUBLIC_API_URL=https://neeu.mathiuskormasela.com/api/v1\n"
    }
  ]

  it.each(successTestCases)('should generate .env for $selectedEnv environment', async ({ selectedEnv, expectedResult }) => {
    const writeFileMock = jest.fn()

    writeFileMock.mockResolvedValue(true)

    await expect(setEnv({
      writeFile: writeFileMock,
      config,
      selectedEnv
    })).resolves.toBe(`.env for ${selectedEnv} was created successfully\n${expectedResult}`)
  })

  it.failing('should return "Unknown env"', async () => {
    const writeFileMock = jest.fn()

    writeFileMock.mockResolvedValue(true)

    await expect(setEnv({
      writeFile: writeFileMock,
      config,
      selectedEnv: 'development2' as never
    })).rejects.toThrow('Unknown env')
  })

  it.failing('should failed generate .env', async () => {
    const writeFileMock = jest.fn()

    writeFileMock.mockRejectedValue('Failed to generated .env')

    await expect(setEnv({
      writeFile: writeFileMock,
      config,
      selectedEnv: 'development'
    })).rejects.toThrow('Failed to generated .env')
  })
})
