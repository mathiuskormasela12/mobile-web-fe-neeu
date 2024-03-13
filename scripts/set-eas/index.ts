import fs from 'fs/promises'
import { type IConfig } from '@Interfaces'
import setEas from './set-eas'

setEas({
  config: (require('../../config.json')) as IConfig,
  writeFile: fs.writeFile
})
  .then((result) => {
    console.info(result)
  })
  .catch((err) => {
    console.error(err)
  })
