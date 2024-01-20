import { ZodError } from "zod";
import { PreprocessData } from "./PreProcessData";
import { HotelData, hotelDataSchema } from "./HotelData";

export const DataValidation = (results) => {
    const validData: HotelData[] = [];
    results.data.forEach((row, index) => {
        const preprocessedRow = PreprocessData(row); // PreprocessData
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