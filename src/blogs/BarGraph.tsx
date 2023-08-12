import Papa, { ParseResult } from "papaparse";
import { useEffect, useState } from "react";

type BrandPrice = {
  brand: string;
  price: string;
  year: number;
};

type Values = {
  data: BrandPrice[];
};

// Get csv data to json

// Create chart

// Create bar

const BarGraph = () => {
  const [CSVData, setCSVData] = useState<Values | undefined>();
  const commonConfig = { delimiter: "," };
  const csvFilePath =
    "https://github.com/FareedaThan/my-portfolio-react/blob/main/src/data/branddata.csv";

  const getCSV = () => {
    Papa.parse(csvFilePath, {
      ...commonConfig,
      header: true,
      download: true,
      complete: (result: ParseResult<BrandPrice>) => {
        setCSVData(result);
      },
    });
  };

  useEffect(() => {
    getCSV();
  }, []);

  console.log(CSVData);
  return <div className="min-h-[90vh]">BarGraph</div>;
};

export default BarGraph;
