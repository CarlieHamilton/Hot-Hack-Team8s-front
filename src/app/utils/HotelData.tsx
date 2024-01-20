import { z } from "zod";

export type CSVDataType = Array<string | number>

export type HotelData = {
    date: Date;
    city: string;
    state: string;
    king: number;
    twin: number;
    suite: number;
    roomNightTotal: number;
    spend: number;
    roomMarketAverage: number;
    savings: number;
};

export const hotelDataSchema = z.object({
    date: z.date({
        required_error: "Please enter a date for each field",
        invalid_type_error: "Please check that your dates are correct",
    }), // Merged 'day', 'date', 'month'
    city: z.string({
        required_error: "Please enter a city for each field",
        invalid_type_error: "This is not a valid city",
    }),
    state: z.string({
        required_error: "Please enter a state for each field",
        invalid_type_error: "This is not a valid state",
    }),
    king: z.number({
        required_error: "Please enter a number for each king field",
        invalid_type_error: "This is not a valid number",
    }),
    twin: z.number({
        required_error: "Please enter a number for each twin field",
        invalid_type_error: "This is not a valid number",
    }),
    suite: z.number({
        required_error: "Please enter a number for each suite field",
        invalid_type_error: "This is not a valid number",
    }),
    roomNightTotal: z.number({
        required_error: "Please enter a number for each Room Night Total field",
        invalid_type_error: "This is not a valid number",
    }),
    spend: z.number({
        required_error: "Please enter a number for each spend field",
        invalid_type_error: "This is not a valid number",
    }),
    roomMarketAverage: z.number({
        required_error:
            "Please enter a number for each Room Market Average field",
        invalid_type_error: "This is not a valid number",
    }),
    savings: z.number({
        required_error: "Please enter a number for each savings field",
        invalid_type_error: "This is not a valid number",
    }),
});