import { DataRecord } from "./types";

export const ChartFields: (keyof DataRecord)[] = ["avgSpeed", "avgPulse"];
export const ExtrapolationDays = 3;
