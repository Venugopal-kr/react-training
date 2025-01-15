
import { MenuItem, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchProductionLine } from '../../services/api';
import { ProductionLine as Line } from '../../models/models';

const ProductionLine = ({ line, onLineChange }: { line: string, onLineChange: (value: string) => void }) => {

    const [lines, setLines] = useState<Line[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const lines = await fetchProductionLine();
            setLines(lines);
        };
        fetchData();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onLineChange(event.target.value as string);
    };

    return (
        <>
            <TextField
                id="state"
                label="Production Line"
                select
                value={line}
                onChange={handleChange}
                fullWidth
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {lines.length > 0 && lines.map((line: Line) => (
                    <MenuItem key={line.id} value={line.name}>{line.name}</MenuItem>
                ))}
            </TextField>
        </>
    );
};

export default ProductionLine;