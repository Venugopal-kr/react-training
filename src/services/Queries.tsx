import { useQuery } from "@tanstack/react-query";
import { fetchLineEquipment, fetchLineOrderStatus, fetchPlannedOrders, fetchProductionOrders } from "./api";
import { LineEquipment, LineOrder, ProductionOrder } from "../models/models";

export const GetProductionData = () => {
    return useQuery<LineOrder[]>({ queryKey: ['orders'], queryFn: fetchProductionOrders }).data
}

export const GetLineOrderStatus = () => {
    return useQuery<LineOrder[]>({ queryKey: ['lineOrders'], queryFn: fetchLineOrderStatus }).data
}

export const GetPlannedOrders = () => {
    return useQuery<ProductionOrder[]>({ queryKey: ['plannedOrders'], queryFn: fetchPlannedOrders }).data
}

export const GetLineEquipmentStatus = (id: string) => {
    return useQuery<LineEquipment>({ queryKey: ['lineEquipments'], queryFn: () => fetchLineEquipment(id), enabled: id !== '' })
}