import React, { useState } from "react";

import { useStore } from '@nanostores/react' // or '@nanostores/preact'
import { $selectedOffering } from "@utils/store";

export function Offering() {
  const selectedOffering = useStore($selectedOffering)
  const handleOfferingChange = (e) => {
    $selectedOffering.set(e.target.value);
  };

  return (
    <select
      value={selectedOffering}
      onChange={handleOfferingChange}
      className="w-32 px-2 py-1 border border-gray-300 rounded"
    >
      <option value="course">Course</option>
      <option value="service">Service</option>
      <option value="ebook">eBook</option>
      <option value="product">Product</option>
    </select>
  );
}
