import React, { useMemo } from "react";
import { Line } from '@ant-design/charts';
import { DataRecord } from "../../types";
import { ChartData, mapData } from "./utils";

interface Props {
    data: DataRecord[];
}

export const Chart: React.FC<Props> = ({ data }) => {
    const mappedData = useMemo(() => mapData(data), [data]);

    const config = {
        data: mappedData,
        xField: (d: ChartData) => new Date(d.startTs),
        yField: 'value',
        colorField: 'type',
        legend: { size: false },
    };

    return <Line {...config} />;
}