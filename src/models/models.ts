export interface OrderForm {
    comment: string | undefined
    lineId: string | undefined
    orderId: string | undefined
    orderName: string
    orderQuantity: number
    productId: string | undefined
    status?: string | undefined
  }

  export enum OrderState {
    PLANNED = 1,
    ACTIVATING = 2,
    ACTIVE = 3,
    FINISHED = 4,
    CANCELLED = 5
  }

  export interface ProductionLine {
    id: number;
    name: string;
  }

  export interface ProductionOrder {
    id?: number;
    name: string;
    line: string;
    productName: string;
    plannedQuantity: number;
    producedQuantity: number;
    status: string;
  }

  export interface LineOrder {
    lineName: string;
    lineStatus: string;
    orders: Order[];
    equipments: Equipment[];
  }

  export interface Order {
    orderId: number;
    orderName: string;
    productName: string;
    plannedQuantity: number;
    producedQuantity: number;
    orderStatus: string;
  }

  export interface Equipment {
    name: string;
    status: string;
  }


  export enum OrderStatus {
    Finished = 'primary',
    Error = 'error',
    InProgress = 'secondary',
    Activating = 'info',
    Ready = 'default',
    Active = 'success'
  }

  export interface Product {
    id: number;
    description: string;
    materialNumber: string;
    unitOfMeasurement: string;
  }