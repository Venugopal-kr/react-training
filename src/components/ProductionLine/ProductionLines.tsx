import './ProductionLine.css';
import { Box, Card, CardActionArea, CardContent, Chip, Divider, Paper, Stack, Typography } from '@mui/material';
import { Equipment, LineOrder, OrderStatus } from '../../models/models';
import { useContext } from 'react';
import { ProductionContext } from '../../contexts/ProductionContext';

const ProductionLines = () => {
    const context = useContext(ProductionContext);

    if (!context) {
        return <div>Error: ProductionContext not found</div>;
    }

    const { productionLineStatus } = context;

    console.log(productionLineStatus);
    return (
        <>
        {productionLineStatus && productionLineStatus.map((line:LineOrder) => (<Paper key={line.lineName} className="bg-white shadow-md rounded-lg p-4 mt-4 w-full">
            <Stack direction="row" spacing={2} className='items-center mb-2'>
                <Typography gutterBottom className="text-black-900 text-left font-bold text-xl">
                    Line Status for {line.lineName}
                </Typography>
                <Chip label={line.lineStatus} color={OrderStatus[line.lineStatus as keyof typeof OrderStatus]} />
            </Stack>

            <Divider />
            <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">{line && line.equipments &&
                line.equipments.map((epq: Equipment) => (
                    <Card key={epq.name}>
                        <CardActionArea
                            sx={{
                                height: '100%',
                                '&[data-active]': {
                                    backgroundColor: 'action.selected',
                                    '&:hover': {
                                        backgroundColor: 'action.selectedHover',
                                    },
                                },
                            }}
                        >
                            <CardContent sx={{ height: '100%' }}>
                                <Typography variant="h5" component="div">
                                    {epq.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {epq.status}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}</Box>

        </Paper>))}
        </>

    );
};

export default ProductionLines;