import {
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { LineOrder, OrderStatus } from "../../models/models";
import React from "react";
import { useDispatch } from "react-redux";
import { selectOrder } from "../../features/order-create/orderSelectedSlice";

import {
  GetLineOrderStatus,
  GetPlannedOrders,
  GetProductionData,
} from "../../services/Queries";
import CircularProgress from "@mui/material/CircularProgress";
import { updateProductionOrder } from "../../services/api";
import { useQueryClient } from "@tanstack/react-query";

const Orders = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const orders = GetProductionData();
  const productionLineStatus = GetLineOrderStatus();
  const plannedOrders = GetPlannedOrders();

  const [activeOrder, setActiveOrder] = React.useState<string | undefined>();

  const selectedOrder = (id: string) => {
    productionLineStatus?.filter((lineOrder: LineOrder) => {
      if (lineOrder.id === id) {
        dispatch(selectOrder(lineOrder));
      }
    });
  };

  const processPlannedOrders = async () => {
    queryClient.invalidateQueries({ queryKey: ["plannedOrders"] });
    if (plannedOrders && plannedOrders.length > 0) {
      const order = plannedOrders[0];
      if (order.id !== undefined) {
        while (order.plannedQuantity !== order.producedQuantity) {
          try {
            await updateProductionOrder(order.id.toString(), {
              producedQuantity: order.producedQuantity + 10,
              status: "InProgress",
            });
            queryClient.invalidateQueries({ queryKey: ["plannedOrders"] });
            queryClient.invalidateQueries({ queryKey: ["orders"] });
            order.producedQuantity += 10;
          } catch (error) {
            console.error("Error updating production order:", error);
            break;
          }
        }
        await updateProductionOrder(order.id.toString(), { status: "Finished" });
        queryClient.invalidateQueries({ queryKey: ["orders"] });
      }
    }
  };

  if (!orders) {
    return (
      <div className="flex justify-center items-center h-full">
        <CircularProgress />
      </div>
    );
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
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order: LineOrder) => (
            <TableRow
              key={order.id}
              className={`${
                activeOrder === order.id ? "bg-blue-200" : ""
              } cursor-pointer`}
              onClick={() => {
                if (order.id) {
                  selectedOrder(order.id);
                  setActiveOrder(order.id);
                }
              }}
            >
              <TableCell component="th" scope="row">
                <Chip
                  label={order.status}
                  color={OrderStatus[order.status as keyof typeof OrderStatus]}
                />
              </TableCell>
              <TableCell align="right" className="text-right">
                {order.name}
              </TableCell>
              <TableCell align="right" className="text-right">
                {order.productName}
              </TableCell>
              <TableCell align="right" className="text-right">
                {order.line.lineName}
              </TableCell>
              <TableCell align="right" className="text-right">
                {order.plannedQuantity}
              </TableCell>
              <TableCell align="right" className="text-right">
                {order.producedQuantity}
              </TableCell>
              <TableCell align="right" className="text-right">
                <Button
                  variant="contained"
                  color="warning"
                  className="text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    processPlannedOrders();
                  }}
                  disabled={order.status === "Finished"}
                >
                  Process Order
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(Orders);
