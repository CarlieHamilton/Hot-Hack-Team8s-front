"use client";

import SortBtn from "./SortBtn";
import UploadCSV from "./UploadCSV";
import Table from "../Table";

import { useState } from "react";
import { HotelReservationData } from "@/useGetReservations";

export default function Page() {
  const [tableData, setTableData] = useState<HotelReservationData[]>();

  return (
    <div className="flex flex-col h-screen items-center px-24 py-5">
      <h1 className="text-4xl py-10 px-6">Dashboard</h1>
      <UploadCSV setTableData={setTableData} />
      {tableData && <Table reservations={tableData} />}
    </div>
  );
}
