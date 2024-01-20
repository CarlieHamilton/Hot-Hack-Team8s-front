"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { UploadDataToFirestore } from "./UploadDataToFirestore";
import { db } from "./FirebaseConfig";
import { DataValidation } from "./DataValidation";
//import results

type FormData = {
    file: FileList;
};

export function FileUploadForm({}) {
    //results from csv array of arrays
    // const results: any[][] = [];

    //preprocess result data
    const validData = DataValidation(results); // needs to be each array / row in dataset

    //on submit - handle file upload
    const onSubmit: SubmitHandler<FormData> = (validData) => {
        UploadDataToFirestore(validData, db);
        console.log("onSubmit successful");
    };


    //placeholder submit button
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="file" {...register("file")} accept=".csv" />
            <button type="submit">Upload</button>
        </form>
    );
}