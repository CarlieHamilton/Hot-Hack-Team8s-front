"use client";

import { useGetReservations } from "@/useGetReservations";
import Table from "../Table";

export default function Page() {

  const { data: reservations } = useGetReservations();

  return (
    <div className="flex flex-col flex-grow items-center px-24 py-5">
      <h1 className="text-4xl py-10 px-6">History</h1>
      {reservations && <Table reservations={reservations} />}
    </div>
  );
}
