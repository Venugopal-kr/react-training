import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { OrderForm as OrderFormData } from '../../models/models';
import ProductDropdown from './ProductDropdown';
import ProductionLineDropdown from './ProductionLineDropdown';
import { createProductionOrder } from '../../services/api';
import { useNavigate } from 'react-router';

const OrderForm: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<OrderFormData>({
        comment: '',
        lineId: '',
        orderId: '',
        orderName: '',
        orderQuantity: 0,
        productId: '',
        status: 'Planned',
    });

    const handleProductChange = (productId: string) => {
        setFormData({ ...formData, productId });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (!formData.orderName || !formData.lineId || !formData.productId || (!formData.orderQuantity && formData.orderQuantity > 0)) {
                alert("Please fill in all required fields with valid values.");
                return;
            }

            const productionOrder = {
                name: formData.orderName,
                line: formData.lineId,
                productName: formData.productId,
                quantity: formData.orderQuantity || 0,
                comment: formData.comment || '',
                status: formData.status || 'Planned',
                plannedQuantity: formData.orderQuantity || 0,
                producedQuantity: 0,
            };
            await createProductionOrder(productionOrder);
            navigate("/")
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <Paper sx={{ width: '90%', margin: '2rem auto', padding: '2rem' }} elevation={5}>
            <Typography variant="h5" component="div" gutterBottom>
                Create New Order
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid container size={4}>
                        <TextField
                            id="orderName"
                            label="Order Name"
                            value={formData.orderName}
                            onChange={(e) => setFormData({ ...formData, orderName: e.target.value })}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid container size={4}>
                        <TextField
                            id="quantity"
                            label="Quantity"
                            type="number"
                            value={formData.orderQuantity}
                            onChange={(e) => setFormData({ ...formData, orderQuantity: parseInt(e.target.value) })}
                            required
                            fullWidth
                        />
                    </Grid>

                    <Grid container size={4}>
                        <TextField
                            id="comment"
                            label="Comment"
                            value={formData.comment}
                            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                            fullWidth
                        />
                    </Grid>
                    <Grid container size={4}>
                        <ProductionLineDropdown line={formData.lineId || ''} onLineChange={(e: string) => setFormData({ ...formData, lineId: e })} />
                    </Grid>
                    <Grid container size={4}>
                        <ProductDropdown product={formData.productId || ''} onProductChange={handleProductChange} />
                    </Grid>
                    <Grid container size={12} justifyContent="flex-end">
                        <Button type="submit" variant="contained" color="primary">
                            Create Order
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default OrderForm;