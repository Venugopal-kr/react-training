/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import {
  LineEquipment,
  LineOrder,
  Product,
  ProductionLine,
  ProductionOrder,
} from "../models/models";

const API_BASE_URL = "http://localhost:3000";

export const fetchProductionOrders = async (): Promise<LineOrder[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/lineOrders`);
    return response.data as LineOrder[];
  } catch (error: any) {
    throw new Error("Error fetching production orders: " + error.message);
  }
};

export const fetchLineOrderStatus = async (): Promise<LineOrder[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/lineOrders`);
    return response.data as LineOrder[];
  } catch (error: any) {
    throw new Error("Error fetching production orders: " + error.message);
  }
};

export const fetchLineEquipment = async (id:string): Promise<LineEquipment> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/linesEquipment/${id}`);
    return response.data as LineEquipment;
  } catch (error: any) {
    throw new Error("Error fetching production orders: " + error.message);
  }
};

export const fetchLineEquipments = async (): Promise<LineEquipment[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/linesEquipment`);
    return response.data as LineEquipment[];
  } catch (error: any) {
    throw new Error("Error fetching production orders: " + error.message);
  }
};

export const createProductionOrder = async (orderData: LineOrder) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/lineOrders`,
      orderData
    );
    return response.data;
  } catch (error: any) {
    throw new Error("Error creating production order: " + error.message);
  }
};

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data as Product[];
  } catch (error: any) {
    throw new Error("Error fetching production orders: " + error.message);
  }
};

export const fetchProductionLine = async (): Promise<ProductionLine[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/productionLines`);
    return response.data as ProductionLine[];
  } catch (error: any) {
    throw new Error("Error fetching production orders: " + error.message);
  }
};

export const updateProductionOrder = async (
  orderId: string,
  updateData: Partial<ProductionOrder>
) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/lineOrders/${orderId}`,
      updateData
    );
    return response.data;
  } catch (error: any) {
    throw new Error("Error updating production order: " + error.message);
  }
};

export const fetchPlannedOrders = async (): Promise<ProductionOrder[]> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/lineOrders?status=Planned`
    );
    return response.data as ProductionOrder[];
  } catch (error: any) {
    throw new Error("Error fetching planned orders: " + error.message);
  }
};
