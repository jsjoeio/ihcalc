import { atom } from 'nanostores'

export const $numOfMonths = atom<number>(2)
export const $selectedOffering = atom<string>("course")
export const $offeringPrice = atom<number>(50)
export const $totalMoneyWanted = atom<number>(50000)

const DAYS_IN_MONTH = 30;

export function getTotalSales() {
    return Math.round($totalMoneyWanted.get() / $offeringPrice.get());
}

export function getSalesPerMonth() {
    return Math.round(getTotalSales() / $numOfMonths.get())
}

export function getSalesPerDay() {
    return Math.round(getSalesPerMonth() /  DAYS_IN_MONTH);
}

export function getConversionRate() {
    return 0.02
}

export function getMonthlyVisitors() {
    return Math.round(getSalesPerDay() / getConversionRate());
}

export function getDailyVisitors() {
    return Math.round(getMonthlyVisitors() / DAYS_IN_MONTH);
}
