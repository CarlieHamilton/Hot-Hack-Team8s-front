import { ZodError } from "zod";
import { monthMap, preprocessData } from "./PreProcessData";
import { CSVDataType, HotelData, hotelDataSchema } from "./HotelData";

export const DataValidation = (results: CSVDataType[]): HotelData[] => {
  let validData: HotelData[] = [];
  results.forEach((row, index) => {
    if (!(row[2] in monthMap)) {
      return;
    }

    const preprocessedRow = preprocessData(row); // PreprocessData
    try {
      const parsedRow = hotelDataSchema.parse(preprocessedRow); // validation step
      validData.push(parsedRow);
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = `Validation error in row ${index + 1}: ${JSON.stringify(error.flatten().fieldErrors)}`;
        console.error(errorMessage);
      }
    }
  });

  return validData;
};
