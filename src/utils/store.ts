import { atom } from 'nanostores'

export const $numOfMonths = atom<number>(2)
export const $selectedOffering = atom<string>("course")
export const $offeringPrice = atom<number>(50)
export const $totalMoneyWanted = atom<number>(50000)

// const monthlyVisitors = 8350;

export function getTotalSales() {
    return Math.round($totalMoneyWanted.get() / $offeringPrice.get());
}

export function getSalesPerMonth() {
    return Math.round(getTotalSales() / $numOfMonths.get())
}

export function getSalesPerDay() {
    const DAYS_IN_MONTH = 30;
    return Math.round(getSalesPerMonth() /  DAYS_IN_MONTH);
}

export function getConversionRate() {
    return 0.02
}

export function getMonthlyVisitors() {
    return Math.round(getTotalSales() / getConversionRate());
}