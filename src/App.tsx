import { useState, useEffect } from "react";
import { FileButton } from "./components/FileButton";
import { Table } from "./components/Table";
import { Chart } from "./components/Chart";
import { DataRecord } from "./types";
import { extrapolateData } from "./utils/extrapolate";
import { ExtrapolationDays } from "./config";

function App() {
  const [data, setData] = useState<DataRecord[]>([]);
  const [extrapolatedData, setExtrapolatedData] = useState<DataRecord[]>([]);
  const [extrapolationDays, setExtrapolationDays] = useState(ExtrapolationDays);

  useEffect(() => setExtrapolatedData(extrapolateData(data, extrapolationDays)), [data, extrapolationDays]);

  return (
      <>
        <FileButton onFile={(data) => setData(data)} />
        <div>
          <span>Дней экстраполяции: </span>
          <input type="number" onChange={(e) => setExtrapolationDays(+e.target.value)} value={extrapolationDays} />
        </div>
        <Table data={data} extrapolatedData={extrapolatedData} />
        <Chart data={data} extrapolatedData={extrapolatedData} />
      </>
  );
}

export default App;
