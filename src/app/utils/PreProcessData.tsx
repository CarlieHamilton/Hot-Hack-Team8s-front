import { CSVDataType, HotelData } from "./HotelData";

export const monthMap: { [key: string]: number } = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

const createDateFromInfo = (day: string, date: number, month: number): Date => {
  // Parsing the date components and creating a Date object
  const year = new Date().getFullYear(); // Assuming the current year, adjust as needed
  const formattedDate = new Date(year, month, date);

  // Set the day of the week (optional, remove if not needed)
  formattedDate.setDate(
    formattedDate.getDate() +
      ([
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ].indexOf(day) +
        1) -
      formattedDate.getDay()
  );

  return formattedDate;
};

const removeDollarSymbol = (input: string | number):string => {
  if (input === '') {
    return '0';
  }
  return input.toString().replace(/\$/g, '');
}

const convertStringToNumber = (inputString: string | number): number => {
  return parseInt(inputString.toString());
};

export const preprocessData = (data: CSVDataType): HotelData => {
  // Check if the month name is valid
  if (!(data[2] in monthMap)) {
    throw Error(`Invalid month ${data[2]}`);
  }

  const date = createDateFromInfo(
    data[0].toString(),
    parseInt(data[1].toString()),
    monthMap[data[2].toString()]
  );

  const result =  {
    date: date,
    city: data[3].toString().toLowerCase(),
    state: data[4].toString().toLowerCase(),
    king: convertStringToNumber(data[5]),
    twin: convertStringToNumber(data[6]),
    suite: convertStringToNumber(data[7]),
    roomNightTotal: convertStringToNumber(data[8]),
    spend: convertStringToNumber(removeDollarSymbol(data[9])),
    roomMarketAverage: data[10] ? convertStringToNumber(removeDollarSymbol(data[10])) : 0,
    savings: data[11] ? convertStringToNumber(removeDollarSymbol(data[11])) : 0,
  };

  return result;
};
