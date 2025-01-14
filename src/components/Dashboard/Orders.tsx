import { Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { LineOrder, OrderStatus, ProductionOrder } from '../../models/models';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { selectOrder } from '../../features/order-create/orderSelectedSlice';
import { ProductionContext } from '../../contexts/ProductionContext';


const Orders = () => {
    const context = useContext(ProductionContext);
    const dispatch = useDispatch()

    const [activeOrder, setActiveOrder] = React.useState<number | undefined>()
    if (!context) {
        return <div>Error: ProductionContext not found</div>;
    }

    const { productionOrders: orders, productionLineStatus } = context;

    const selectedOrder = (line: string) => {
        productionLineStatus.filter((lineOrder: LineOrder) => {
            if (lineOrder.lineName === line) {
                dispatch(selectOrder(lineOrder))
            }
        })
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Status</TableCell>
                        <TableCell align="right">Order Name</TableCell>
                        <TableCell align="right">Product</TableCell>
                        <TableCell align="right">Line</TableCell>
                        <TableCell align="right">Planned Quantity</TableCell>
                        <TableCell align="right">Produced Quantity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order: ProductionOrder) => (
                        <TableRow
                            key={order.id}
                            className={`${activeOrder === order.id ? 'bg-blue-200' : ''
                                } cursor-pointer`}
                            onClick={() => {
                                selectedOrder(order.line);
                                setActiveOrder(order.id);
                            }}
                        >
                            <TableCell component="th" scope="row">
                                <Chip label={order.status} color={OrderStatus[order.status as keyof typeof OrderStatus]} />
                            </TableCell>
                            <TableCell align="right" className="text-right">{order.name}</TableCell>
                            <TableCell align="right" className="text-right">{order.productName}</TableCell>
                            <TableCell align="right" className="text-right">{order.line}</TableCell>
                            <TableCell align="right" className="text-right">{order.plannedQuantity}</TableCell>
                            <TableCell align="right" className="text-right">{order.producedQuantity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default React.memo(Orders)