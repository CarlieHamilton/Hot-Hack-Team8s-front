"use client";

import { DragEvent, useState } from "react";
import { useCSVReader, formatFileSize } from "react-papaparse";
import { CSVDataType } from "../utils/HotelData";
import { preprocessData } from "../utils/PreProcessData";

export default function UploadCSV() {
  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);
  const [uploadedCsv, setUploadedCsv] = useState([]);

  const handleUpload = (data: CSVDataType[]) => {
    const processedData = preprocessData(data[1]);
    console.log(processedData, 'process-data');
  };

  return (
    <div className="my-5 w-full flex justify-center items-center flex-col">
      {/* upload CSV section */}
      <h2 className="text-xl">Upload your documents here</h2>
      <div className="flex items-center justify-between flex-col">
        <CSVReader
          onUploadAccepted={(results: any) => {
            setUploadedCsv(results.data);
            handleUpload(results.data);
          }}
          onDragOver={(event: DragEvent) => {
            event.preventDefault();
            setZoneHover(true);
          }}
          onDragLeave={(event: DragEvent) => {
            event.preventDefault();
            setZoneHover(false);
          }}
        >
          {({
            getRootProps,
            acceptedFile,
            ProgressBar,
            getRemoveFileProps,
          }: any) => (
            <>
              <div {...getRootProps()}>
                {acceptedFile ? (
                  <>
                    <div className="my-5 p-6 border-2 border-indigo-500 flex flex-col space-y-3 justify-center">
                      <span className="">
                        {formatFileSize(acceptedFile.size)}
                      </span>
                      <span className="">{acceptedFile.name}</span>
                    </div>

                    <div className="my-2">
                      <ProgressBar></ProgressBar>
                    </div>

                    <button
                      {...getRemoveFileProps()}
                      className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full"
                    >
                      Remove
                    </button>
                  </>
                ) : (
                  <div
                    className={`
                  p-6 my-5 mx-auto max-w-md border-dashed border-2 rounded-md hover:cursor-pointer border-gray-700 hover:border-gray-400
                  ${zoneHover ? `border-gray-300` : `border-gray-700`} `}
                  >
                    Drop CSV file here or click to upload
                  </div>
                )}
              </div>
            </>
          )}
        </CSVReader>
      </div>
    </div>
  );
}
