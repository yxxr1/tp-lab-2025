import React from "react";
import { DataRecord } from "../../types";

interface Props {
    onFile: (data: DataRecord[]) => void;
}

export const FileButton: React.FC<Props> = ({ onFile }) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.addEventListener("load", () => {
                try {
                    onFile(JSON.parse(reader.result as string))
                } catch (e) {
                    alert("error parsing file");
                }
            });

            reader.readAsText(file);
        }
    }

    return (
        <input type="file" accept="application/json" onChange={onChange} />
    );
}