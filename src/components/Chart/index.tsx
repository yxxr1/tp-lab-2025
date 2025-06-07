import React, { useMemo } from "react";
import { Line } from '@ant-design/charts';
import { DataRecord } from "../../types";
import { ChartData, mapData } from "./utils";

interface Props {
    data: DataRecord[];
    extrapolatedData: DataRecord[];
}

export const Chart: React.FC<Props> = ({ data, extrapolatedData }) => {
    const config = useMemo(() => {
        const mappedData = mapData(data);
        const mappedExtrapolatedData = mapData(data.length && extrapolatedData.length ? [data[data.length - 1], ...extrapolatedData] : [], "extrapolated");

        return {
            data: [...mappedData, ...mappedExtrapolatedData],
            xField: (d: ChartData) => new Date(d.startTs),
            yField: 'value',
            colorField: 'type',
            legend: { size: false },
            style: {
                lineWidth: 2,
                lineDash: (items: ChartData[]) => items[0].type.includes("-extrapolated") ? [2, 4] : [0, 0],
            },
        };
    }, [data, extrapolatedData]);

    return <Line {...config} />;
}
