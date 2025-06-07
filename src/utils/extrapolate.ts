import { DataRecord } from "../types";

const ExtrapolationDays = 3;
const dayMs = 24 * 60 * 60 * 1000;

export const extrapolateData = (data: DataRecord[]) => {
  if (data.length < ExtrapolationDays) {
    return [];
  }

  const result = [];
  const startIndex = data.length - ExtrapolationDays;
  let lastTs = data[data.length - 1].startTs;
  const currentSum = {
    durationMin: 0,
    distance: 0,
    maxSpeed: 0,
    minSpeed: 0,
    avgSpeed: 0,
    avgPulse: 0,
  };

  for (let i = startIndex; i < data.length; i++) {
    const record = data[i];
    currentSum.durationMin += record.durationMin;
    currentSum.distance += record.distance;
    currentSum.maxSpeed += record.maxSpeed;
    currentSum.minSpeed += record.minSpeed;
    currentSum.avgSpeed += record.avgSpeed;
    currentSum.avgPulse += record.avgPulse;
  }

  for (let i = startIndex; i < data.length; i++) {
    lastTs += dayMs;
    const newRecord = {
      startTs: lastTs,
      durationMin: Math.round(currentSum.durationMin / ExtrapolationDays),
      distance: Math.round(currentSum.distance / ExtrapolationDays),
      maxSpeed: Math.round(currentSum.maxSpeed / ExtrapolationDays),
      minSpeed: Math.round(currentSum.minSpeed / ExtrapolationDays),
      avgSpeed: Math.round(currentSum.avgSpeed / ExtrapolationDays),
      avgPulse: Math.round(currentSum.avgPulse / ExtrapolationDays),
    };
    result.push(newRecord);
    const record = data[i];

    currentSum.durationMin += newRecord.durationMin - record.durationMin;
    currentSum.distance += newRecord.distance - record.distance;
    currentSum.maxSpeed += newRecord.maxSpeed - record.maxSpeed;
    currentSum.minSpeed += newRecord.minSpeed - record.minSpeed;
    currentSum.avgSpeed += newRecord.avgSpeed - record.avgSpeed;
    currentSum.avgPulse += newRecord.avgPulse - record.avgPulse;
  }

  return result;
}
