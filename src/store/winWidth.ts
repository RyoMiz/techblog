import { atom } from 'recoil'

export const winWidth = atom<number | null>({
  key: 'winWidth',
  default: null,
})
