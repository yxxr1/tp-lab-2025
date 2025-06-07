import React from "react";
import { DataRecord } from "../../types";

interface Props {
    data: DataRecord[];
    extrapolatedData: DataRecord[];
}

const formatDate = (date: Date)=> {
    const pad = (n: number) => n.toString().length === 1 ? `0${n.toString()}` : n.toString()

    return `${date.getFullYear()}-${pad(date.getMonth())}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export const Table: React.FC<Props> = ({ data, extrapolatedData }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Время начала пробежки</th>
                    <th>Длительность бега / мин</th>
                    <th>Пройденное расстояние / км</th>
                    <th>Максимальная скорость</th>
                    <th>Минимальная скорость</th>
                    <th>Средняя скорость</th>
                    <th>Средний пульс</th>
                </tr>
            </thead>
            <tbody>
                {data.map(({ startTs, durationMin, distance, maxSpeed, minSpeed, avgSpeed, avgPulse }, index) => (
                    <tr key={startTs}>
                        <td>{formatDate(new Date(startTs))}</td>
                        <td>{durationMin}</td>
                        <td>{distance}</td>
                        <td>{maxSpeed}</td>
                        <td>{minSpeed}</td>
                        <td>{avgPulse}</td>
                        <td>{avgPulse}</td>
                    </tr>
                ))}
                {extrapolatedData.map(({ startTs, durationMin, distance, maxSpeed, minSpeed, avgSpeed, avgPulse }, index) => (
                    <tr key={startTs} style={{ backgroundColor: "#ccc" }}>
                        <td>{formatDate(new Date(startTs))}</td>
                        <td>{durationMin}</td>
                        <td>{distance}</td>
                        <td>{maxSpeed}</td>
                        <td>{minSpeed}</td>
                        <td>{avgPulse}</td>
                        <td>{avgPulse}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
