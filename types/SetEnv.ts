import { type ISetEnvParams } from '@Interfaces'

export type SetEnv = (params: ISetEnvParams) => Promise<string>
