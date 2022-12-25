import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../config/config';

import Buyers from './BuyersModel';
import CNPJs from './CNPJsModel';
import Providers from './ProvidersModel';
import Users from './UsersModel';

class Orders extends Model {
  id!: number;
  orderNfId!: string;
  orderNumber!: string;
  orderPath!: string;
  orderFileName!: string;
  orderOriginalName!: string;
  emissionDate!: string;
  pdfFile!: string;
  emitedTo!: string;
  nNf!: string;
  CTE!: string;
  value!: string;
  cnpjId!: number;
  userId!: number;
  buyerId!: number;
  providerId!: number;
  orderStatusBuyer!: string;
  orderStatusProvider!: string;
  deliveryReceipt!: string;
  cargoPackingList!: string;
  deliveryCtrc!: string;
}

Orders.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    orderNfId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    orderNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    orderPath: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true,
    },
    orderFileName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true,
    },
    orderOriginalName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true,
    },
    emissionDate: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    pdfFile: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    emitedTo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    nNf: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    CTE: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    cnpjId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    buyerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    providerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    orderStatusBuyer: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    orderStatusProvider: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    deliveryReceipt: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    cargoPackingList: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    deliveryCtrc: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

Orders.belongsTo(Buyers, { foreignKey: 'buyerId', as: 'buyers' });
Orders.belongsTo(Providers, { foreignKey: 'providerId', as: 'providers' });
Orders.belongsTo(CNPJs, { foreignKey: 'cnpjId', as: 'cnpjs' });
Orders.belongsTo(Users, { foreignKey: 'userId', as: 'users' });

export default Orders;
