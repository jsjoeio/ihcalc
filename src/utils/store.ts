import { atom } from 'nanostores'

export const $users = atom<string[]>(["hello"])

export function getUsers() {
  return $users.get().length
}

// 1. Convert all states to use atoms
export const $numOfMonths = atom<number>(2)

export function getNumOfMonths() {
  return $numOfMonths.get();
}

// 2. Add helper functons to work with atoms