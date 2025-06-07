import { useState, useEffect } from "react";
import { FileButton } from "./components/FileButton";
import { Table } from "./components/Table";
import { DataRecord } from "./types";
import { Chart } from "./components/Chart";
import { extrapolateData } from "./utils/extrapolate";

function App() {
  const [data, setData] = useState<DataRecord[]>([]);
  const [extrapolatedData, setExtrapolatedData] = useState<DataRecord[]>([]);

  useEffect(() => setExtrapolatedData(extrapolateData(data)), [data]);

  return (
      <>
        <FileButton onFile={(data) => setData(data)} />
        <Table data={data} extrapolatedData={extrapolatedData} />
        <Chart data={data} />
      </>
  );
}

export default App;
