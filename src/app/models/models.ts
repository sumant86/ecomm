export interface Iproduct {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
  quantity: number;
  guid:string;
}

export interface IColumnDefinition {
  field: string;
  name: string;
  sort: any;
  sortEnable: boolean;
  type: string; //checkbox, date, hidden
  selectAll: boolean;
  className: string;
  prefix: string;
}

export interface ICartProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
  quantity: number;
  guid:string;
}
