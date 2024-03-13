import { type ISetEnvParams } from '@Interfaces'

export type SetEas = (params: Omit<ISetEnvParams, 'selectedEnv'>) => Promise<string>
