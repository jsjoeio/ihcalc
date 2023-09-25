import { atom } from 'nanostores'

// 1. Convert all states to use atoms
export const $numOfMonths = atom<number>(2)
export const $selectedOffering = atom<string>("course")
export const $offeringPrice = atom<number>(50)
export const $totalMoneyWanted = atom<number>(50000)
