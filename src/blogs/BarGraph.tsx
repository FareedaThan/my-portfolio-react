import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Papa, { ParseResult } from "papaparse";
import { useEffect, useState } from "react";

type BrandPrice = {
  brand: string;
  price: string;
  year: string;
};

const arrayRange = (start: number, stop: number, step: number) => {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );
};

// Get csv data to json
const CSVToJson = () => {
  const [CSVData, setCSVData] = useState<BrandPrice[]>([]);
  const commonConfig = { delimiter: "," };
  const csvFilePath = "/branddata.csv";

  const getCSV = () => {
    Papa.parse(csvFilePath, {
      ...commonConfig,
      header: true,
      download: true,
      complete: (result: ParseResult<BrandPrice>) => {
        setCSVData(result.data);
      },
    });
  };

  useEffect(() => {
    getCSV();
  }, []);

  return CSVData;
};

// Create chart
const Chart = ({ children, width, height, range }: any) => (
  <>
    <svg
      viewBox={`100 -50 ${width} ${height}`}
      width="500"
      height="350"
      style={{ border: "1px solid black" }}
      preserveAspectRatio="xMidYMax meet"
      className="mx-auto mt-10 pr-10"
    >
      {children}
      <rect x={70} y={300} width={500} height={1} fill="black" />
      <rect x={70} y={0} width={1} height={300} fill="black" />
      {range.map((num: number) => (
        <>
          <rect x={84 + num * 3} y={300} width={1} height={5} />
          <text x={79 + num * 3} y={320}>
            {num}
          </text>
        </>
      ))}
    </svg>
  </>
);

// Create bar
const Bar = ({ x, y, width, height, label }: any) => (
  <>
    <rect x={x + 80} y={y} width={width} height={height} fill="black" />
    {/* <rect x={x + 70} y={y} width={1} height={60} fill="black" /> */}
    <rect x={x + 65} y={y + 15} width={5} height={1} fill="black" />
    <text x={x} y={y + 20}>
      {label}
    </text>
    <text x={width + 85} y={y + 20}>
      {width / 3}
    </text>
  </>
);

const BarGraph = () => {
  const data: BrandPrice[] = CSVToJson();
  const [filteredData, setFilteredData] = useState<BrandPrice[]>(data);
  const yearList = Array.from(new Set(data.map((item) => item.year)));
  // const priceList = data.map((item) => Number(item.price));
  // const maxPrice = Math.max(...priceList);
  const priceRange = arrayRange(0, 100, 20);
  console.log(priceRange);

  const [filterYear, setFilterYear] = useState("");

  const applyFilter = () => {
    let updateData = data;

    if (!filterYear) {
      updateData = data;
    }

    if (filterYear) {
      updateData = updateData?.filter((data) => data.year.includes(filterYear));
    }

    setFilteredData(updateData);
  };

  useEffect(() => {
    applyFilter();
  }, [filterYear]);

  // console.log(filteredData);
  return (
    <div className="min-h-[90vh]">
      <div className="mt-[10rem]">
        <p className="font-extrabold text-3xl pb-10">
          Brand Price over 3 years
        </p>
        <div className="flex flex-row gap-5 justify-center items-center">
          <p className="text-xl">select year:</p>
          <FormControl sx={{ m: 0, width: 150 }} size="small">
            <InputLabel sx={{ marginLeft: 0.1, marginY: -0.5 }}>
              year
            </InputLabel>
            <Select
              value={filterYear}
              onChange={(e) => {
                {
                  setFilterYear(e.target.value);
                }
              }}
            >
              {yearList.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Plot chart  */}
        <Chart height={400} width={200} range={priceRange}>
          {filteredData.map((data, index) => {
            const barWidth = Number(data.price) * 3;
            return (
              <Bar
                key={data.brand}
                y={index * 60}
                x={0}
                height={30}
                width={barWidth}
                label={data.brand}
              />
            );
          })}
        </Chart>
      </div>
    </div>
  );
};

export default BarGraph;
