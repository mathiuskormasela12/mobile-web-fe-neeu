import { MMKV } from 'react-native-mmkv'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import { type SetStateAction, type WritableAtom } from 'jotai'

const mmkv = new MMKV()

const setItem = (key: string, value: string): void => {
  mmkv.set(key, value)
}

const getItem = (key: string): string | null => {
  const result = mmkv.getString(key)
  return result ?? null
}

const removeItem = (key: string): void => {
  mmkv.delete(key)
}

const clearAll = (): void => {
  mmkv.clearAll()
}

const atomWithMmkv = <T>(key: string, initalValue: T): WritableAtom<T, [SetStateAction<T>], void> => {
  return atomWithStorage<T>(key, initalValue, createJSONStorage(() => ({
    getItem,
    setItem,
    removeItem,
    clearAll
  })))
}

export default atomWithMmkv
