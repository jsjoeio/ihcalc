import { TotalMoneyWanted } from "./TotalMoneyWanted";
import { MonthInput } from "./MonthInput";
import { OfferingPrice } from "./OfferingPrice";
import { useStore } from "@nanostores/react";
import {
  $numOfMonths,
  $offeringPrice,
  $selectedOffering,
  $totalMoneyWanted,
  getConversionRate,
  getMonthlyVisitors,
  getSalesPerDay,
  getSalesPerMonth,
  getTotalSales,
} from "@utils/store";
import "./slider.css";
import { QueryParamsWrapper } from "./QueryParamsWrapper";

function TextCalculated() {
  const totalMoney = useStore($totalMoneyWanted).toLocaleString();
  const numOfMonths = useStore($numOfMonths).toLocaleString();
  const selectedOffering = useStore($selectedOffering);
  const offeringPrice = useStore($offeringPrice).toLocaleString();
  const totalSales = getTotalSales().toLocaleString();
  const salesPerMonth = getSalesPerMonth().toLocaleString();
  const salesPerDay = getSalesPerDay().toLocaleString();
  const conversionRate = getConversionRate() * 100;
  const monthlyVisitors = getMonthlyVisitors().toLocaleString();

  return (
    <div className="mt-10">
      <div className="max-w-sm mx-auto text-center">
        <p className="mb-4">
          That means you need <strong>{totalSales} total sales</strong>, <br />
          which is roughly <strong>{salesPerMonth} sales per month</strong>
          <br /> or <strong>{salesPerDay} per day.</strong>
        </p>
        <p>
          Assuming a <strong>{conversionRate}% conversion rate</strong>, you
          need around <strong>{monthlyVisitors} visitors per month.</strong>
        </p>
      </div>
    </div>
  );
}

export function CalculatorWithTextCalculated() {
  return (
    <div>
      <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter text-center mb-4">
        How much do you want to make?
      </h1>
      <TotalMoneyWanted />
      <MonthInput />
      <OfferingPrice />
      <TextCalculated />
      <QueryParamsWrapper />
    </div>
  );
}
