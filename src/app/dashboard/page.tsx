"use client";

import { DragEvent, useState } from "react";
import { useCSVReader, formatFileSize } from "react-papaparse";

export default function Page() {
  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center px-24">
      <h1 className="text-4xl py-10 px-6">Dashboard</h1>

      {/* upload CSV section */}
      <div className="w-full flex justify-center items-center flex-col">
        <h2 className="text-xl">Upload your documents here</h2>
        <div className="flex items-center justify-between">
          <CSVReader
            onUploadAccepted={(results: any) => {
              console.log(results);
              console.log(results.data, "DATA");
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
                        <span className="">
                          {acceptedFile.name}
                        </span>
                      </div>

                      <div className="my-2">
                        Uploading ...
                        <ProgressBar></ProgressBar>
                      </div>

                      <div 
                        {...getRemoveFileProps()}
                        className="my-5 p-6 border-2 border-red-300 hover:border-red-800 hover:cursor-pointer"
                      >
                        Remove
                      </div>
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
    </div>
  );
}
