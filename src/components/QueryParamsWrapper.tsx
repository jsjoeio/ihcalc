import React, { useEffect } from "react";
import { $numOfMonths, $offeringPrice, $totalMoneyWanted } from "@utils/store";

function clearSearchParams() {
  // Replace the current URL without query parameters
  const newUrl = window.location.origin + window.location.pathname;
  window.history.replaceState({}, document.title, newUrl);
}

export function QueryParamsWrapper() {
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    // Grab values
    const [totalMoney, numOfMonths, offeringPrice] =
      queryParams.get("v")?.split("-") || [];

    // Update store
    if (totalMoney) {
      $totalMoneyWanted.set(parseInt(totalMoney));
    }
    if (numOfMonths) {
      $numOfMonths.set(parseInt(numOfMonths));
    }
    if (offeringPrice) {
      $offeringPrice.set(parseInt(offeringPrice));
    }

    // Clear values from search params
    clearSearchParams();
  }, []);

  return null; // This component doesn't render anything
}
