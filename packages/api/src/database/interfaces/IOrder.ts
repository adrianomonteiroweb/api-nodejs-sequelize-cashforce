export interface IOrder {
  orderNfId: string;
  orderNumber: string;
  orderPath?: string;
  orderFileName?: string;
  orderOriginalName?: string;
  emissionDate?: string;
  pdfFile?: string;
  emitedTo: string;
  nNf?: string;
  CTE?: string;
  value?: string;
  cnpj: string;
  cnpjId?: number;
  userEmail: string;
  userId?: number;
  buyerEmail: string;
  buyerId?: number;
  providerEmail: string;
  providerId?: number;
  orderStatusBuyer?: string;
  orderStatusProvider?: string;
  deliveryReceipt?: string;
  cargoPackingList?: string;
  deliveryCtrc?: string;
}
