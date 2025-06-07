import { DataRecord } from "../../types";
import { ChartFields } from "../../config";

export interface ChartData {
    startTs: number;
    value: number;
    type: string;
}

export const mapData = (data: DataRecord[], type?: string) => data.reduce<ChartData[]>((acc, record) => {
    ChartFields.forEach((field) => {
        acc.push({
            startTs: record.startTs,
            value: record[field],
            type: type ? `${field}-${type}` : field,
        });
    });

    return acc;
}, [])
