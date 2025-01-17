export interface OrderForm {
    comment: string | undefined
    lineId: string | undefined
    orderId: string | undefined
    orderName: string
    orderQuantity: number
    productId: string | undefined
    status?: string | undefined
  }

  export interface ProductionLine {
    id: number;
    name: string;
  }

  export interface ProductionOrder {
    id?: string;
    name: string;
    line: string;
    productName: string;
    plannedQuantity: number;
    producedQuantity: number;
    status: string;
  }

  export interface LineEquipment {
    lineName: string;
    lineStatus: string;
    equipments: Equipment[];
  }

  export interface LineOrder {
    id: string;
    name: string;
    line: Line;
    productName: string;
    plannedQuantity: number;
    producedQuantity: number;
    status: string;
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

  export interface Line {
    lineName: string;
    lineStatus: string;
    ErrorMessage?: string;
    equipments: Equipment[];
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