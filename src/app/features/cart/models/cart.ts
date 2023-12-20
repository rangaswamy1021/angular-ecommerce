export interface Cart {
  id?: number;
  userId?: number;
  date?: Date;
  products?: {
    productId?: number;
    quantity?: number;
  }[];
}

export interface CartRequest {
  userId?: number;
  date?: Date;
  products?: {
    productId?: number;
    quantity?: number;
  }[];
}
