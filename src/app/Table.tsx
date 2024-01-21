import { HotelReservationData } from "@/useGetReservations";
import SortBtn from "./dashboard/SortBtn";

export interface TableProps {
  reservations: HotelReservationData[];
}

export default function Table(props: TableProps) {
  const { reservations } = props;

  return (
    <div className="flex flex-col items-center mt-8 mb-10">
      <h1 className="">Result</h1>
      <SortBtn />
      <div className="overflow-x-auto my-5">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Band Name</th>
              <th>City</th>
              <th>State</th>
              <th>King</th>
              <th>Suite</th>
              <th>Twin</th>
              <th>Room Market Average</th>
              <th>Room Night Total</th>
              <th>Spend</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tbody>
            {/* {isSuccess && */}
            {reservations &&
              reservations.map((result, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{result.date.toString().slice(0, 10)}</td>
                  <td>{result.bandName}</td>
                  <td>{result.city}</td>
                  <td>{result.state}</td>
                  <td>{result.king}</td>
                  <td>{result.suite}</td>
                  <td>{result.twin}</td>
                  <td>{result.roomMarketAverage}</td>
                  <td>{result.roomNightTotal}</td>
                  <td>{result.savings}</td>
                  <td>{result.spend}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
