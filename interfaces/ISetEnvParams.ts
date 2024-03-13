import type fs from 'fs/promises'
import { type AppVariant } from '@Types'
import { type IConfig } from './IConfig'

export interface ISetEnvParams {
  selectedEnv: AppVariant
  config: IConfig
  writeFile: typeof fs.writeFile
}
