"use client";

import SortBtn from "./SortBtn";
import UploadCSV from "./UploadCSV";

export default function Page() {
  return (
    <div className="flex flex-col flex-grow items-center px-24">
      <h1 className="text-4xl py-10 px-6">Dashboard</h1>
      <UploadCSV />
      <SortBtn />
    </div>
  );
}
