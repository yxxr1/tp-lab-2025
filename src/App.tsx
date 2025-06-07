import { useState } from "react";
import { FileButton } from "./components/FileButton";
import { Table } from "./components/Table";
import { DataRecord } from "./types";
import { Chart } from "./components/Chart";

function App() {
  const [data, setData] = useState<DataRecord[]>([]);

  return (
      <>
        <FileButton onFile={(data) => setData(data)} />
        <Table data={data} />
        <Chart data={data} />
      </>
  );
}

export default App;
