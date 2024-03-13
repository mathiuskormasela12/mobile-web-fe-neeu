import fs from 'fs/promises'
import process from 'process'
import { type IConfig } from '@Interfaces'
import { setEnv } from './set-env'
import { type AppVariant } from '@Types'

setEnv({
  selectedEnv: process.argv[2] as AppVariant,
  config: (require('../../config.json')) as IConfig,
  writeFile: fs.writeFile
})
  .then((result) => {
    console.info(result)
  })
  .catch((err) => {
    console.error(err)
  })
